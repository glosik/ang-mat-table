import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatPaginator, MatSort, MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScheduleComponent } from './schedule/schedule.component';


const appRoutes: Routes = [
	// { path: '**', component: PageNotFoundComponent },
	{ path: 'table', component: TableComponent },
	{ path: 'calendar', component: ScheduleComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		TableComponent,
		ScheduleComponent
	],
	imports: [
		BrowserModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatPaginatorModule,
		MatSortModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
