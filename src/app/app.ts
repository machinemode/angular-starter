import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import template from './app.html';

import { SomeService } from './some-service';

@Component({
	selector: 'app',
	template: template
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