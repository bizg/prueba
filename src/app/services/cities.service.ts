import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CitiesService {

	constructor(private http: HttpClient) {}

	get() {
		return this.http.get('assets/json/cities.json');
	}
}