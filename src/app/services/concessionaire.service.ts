import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConcessionaireService {

	constructor(private http: HttpClient) {}

	get() {
		return this.http.get('assets/json/concessionaire.json');
	}
}