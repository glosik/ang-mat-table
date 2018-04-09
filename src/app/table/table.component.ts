import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as players from '../data/shorthanded.json';
import * as games from '../data/schedule.json';

export interface Player {
	'gamesPlayed': number;
	'playerBirthCity': string;
	'playerBirthCountry': string;
	'playerBirthDate': string;
	'playerBirthStateProvince': string;
	'playerDraftOverallPickNo': number;
	'playerDraftRoundNo': number;
	'playerDraftYear': number;
	'playerFirstName': string;
	'playerHeight': number;
	'playerId': number;
	'playerInHockeyHof': number;
	'playerIsActive': number;
	'playerLastName': string;
	'playerName': string;
	'playerNationality': string;
	'playerPositionCode': string;
	'playerShootsCatches': string;
	'playerTeamsPlayedFor': string;
	'playerWeight': number;
	'seasonId': number;
	'shAssists': number;
	'shBlockedShots': number;
	'shFaceoffsLost': number;
	'shFaceoffsWon': number;
	'shGiveaways': number;
	'shGoals': number;
	'shHits': number;
	'shMissedShots': number;
	'shPoints': number;
	'shShots': number;
	'shTakeaways': number;
	'shTimeOnIce': number;
}

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})

export class TableComponent implements AfterViewInit {
	private left = false;
	private displayedColumns = [
		'playerName',
		'playerPositionCode',
		'playerTeamsPlayedFor',
		'shTimeOnIce',
		'shPoints',
		'gamesPlayed'
	];
	private shorthanded: any = players;
	private schedule: any = games;
	// TOD: fix Property 'data' does not exist on type 'typeof '*.json''.
	private PLAYER_DATA: Player[] = this.shorthanded.data;
	private dataSource = new MatTableDataSource(this.PLAYER_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor() {
		let prop, d;
		const obj = this.schedule.dates;
		let arr = [];
		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				const daily = obj[prop].games;
				for (d in daily) {
					if (daily.hasOwnProperty(d)) {
						arr.push(
							{
								date: daily[d].gameDate.split('T')[0],
								away: daily[d].teams.away.team.id,
								home: daily[d].teams.home.team.id,
							}
						);
					}
				}
			}
		}
		arr = arr.reduce(function(acc, cur, i) { acc[i] = cur; return acc; }, {});
		this.gamesAmount(6, 13, arr);
	}

	private gamesAmount(id1, id2, ar) {
		for (const prop in ar) {
			if (ar.hasOwnProperty(prop)) {
				let index;
				index = (ar[prop].away === id1);
				console.log('data', ar[prop].away);
			}
		}
		// let data = ar.map( p => {console.log(p);} );

		return id1;
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	private fil(event) {
		console.log(event.target.textContent);
		this.applyFilter(event.target.textContent);
	}

	private pos(str) {
		this.left = true;
	}

	private applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}
}
