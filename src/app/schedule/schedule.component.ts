import { Component, OnInit } from '@angular/core';
import * as games from '../data/schedule.json';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
	private schedule: any = games;
	private cal: any;

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
		//arr = arr.reduce(function(acc, cur, i) { acc[i] = cur; return acc; }, {});
		this.cal = arr;
		console.log('this.cal', this.cal);
		// this.gamesAmount(6, 13, arr);
	}

	ngOnInit() {}

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

}
