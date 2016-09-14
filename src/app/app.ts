import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import template from './app.html';
import stylesheet from './app.css';

import { SomeService } from './some-service';

@Component({
	selector: 'app',
	template: template,
	styles: [stylesheet],
	encapsulation: ViewEncapsulation.Emulated
})
export class App {
	private title: string = 'App thingy';

	constructor(private service: SomeService) {

	}

	doSomething() {
		this.service.getSomething('blah')
			.subscribe({
				next: result => console.log(result),
				error: error => console.log(error)
			});
	}
}

@NgModule({
	imports: [
		BrowserModule,
		HttpModule
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