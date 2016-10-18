import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { App } from './app';
import { SomeService } from './some-service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		MaterialModule.forRoot()
	],
	declarations: [
		App
	],
	providers: [
		SomeService
	],
	bootstrap: [
		App
	]
})
export class AppModule {

}