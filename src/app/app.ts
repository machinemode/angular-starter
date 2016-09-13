import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SomeService } from './some-service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html'
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