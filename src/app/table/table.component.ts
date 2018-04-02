import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as players from './shorthanded.json';

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
	// TOD: fix Property 'data' does not exist on type 'typeof '*.json''.
	private PLAYER_DATA: Player[] = this.shorthanded.data;
	private dataSource = new MatTableDataSource(this.PLAYER_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
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
