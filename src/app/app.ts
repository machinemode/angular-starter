import { Component, ViewEncapsulation } from '@angular/core';
import { SomeService } from './some-service';


@Component({
	moduleId: module.id,
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
