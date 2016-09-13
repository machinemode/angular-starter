import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SomeService {

	constructor(private http: Http) {

	}

	getSomething(url: string): Observable<any> {
		return this.http.get(url)
			.map(res => console.log(res));
	}
}
