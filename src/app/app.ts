import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SomeService } from './some-service';


@Component({
	moduleId: __moduleName, // aot needs module.id instead
	selector: 'app',
	templateUrl: 'app.html',
	styleUrls: ['app.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class App {
	title: string = 'App thingy';

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