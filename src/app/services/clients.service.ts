import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

	constructor(private http: HttpClient) {}

	getInitial() {
		this.http.get('assets/json/clients.json').subscribe(data => {
			localStorage.setItem('clients', JSON.stringify(data));
			this.getAll();
		});
	}

	getAll() {
		return JSON.parse(localStorage.getItem('clients'));
	}

	getId() {
		let all = this.getAll();
		return all.length + 1;
	}

	getOne(data) {
		let all = this.getAll();
		console.log(data);
		let item = all.find(e => e.id == data[0].id);
		console.log(item);
		return item;
	}

	add(client) {
		let all = JSON.parse(localStorage.getItem('clients'));
			all.push(client);
		localStorage.setItem('clients', JSON.stringify(all));	
	}

	delete(id) {
		let all = this.getAll();
		let item = all.find(e => e.id == id);
			item.status = 'Inactivo';
		localStorage.setItem('clients', JSON.stringify(all));	
	}

	update(data) {
		let all = this.getAll();
		let item = all.find(e => e.id == data.id);
			item.name = data.name;
			item.lastname = data.lastname;
			item.city = data.city;
			item.concessionaire = data.concessionaire;
			item.phone = data.phone;
			item.address = data.address;
		localStorage.setItem('clients', JSON.stringify(all));	
	}
}