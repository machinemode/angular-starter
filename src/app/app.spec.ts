import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { App } from './app';
import { SomeService } from './some-service';

var fixture: ComponentFixture<App>;
var component: App;
var titleElement: DebugElement;

const MockService = {};

describe('Sanity', () => {
	it('should pass a test', () => {
		expect(true).toBe(true);
	});
});

describe('App Component', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [App],
			providers: [ { provide: SomeService, useValue: MockService }]
		});

		fixture = TestBed.createComponent(App);
		component = fixture.componentInstance;
	});

	it('should have a title', () => {
		fixture.detectChanges();
		titleElement = fixture.debugElement.query(By.css('h1'));

		expect(titleElement.nativeElement.textContent).toContain('App thingy');
	});
});
