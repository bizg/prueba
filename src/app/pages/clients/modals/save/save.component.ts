import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/services/cities.service';
import { ClientService } from 'src/app/services/clients.service';
import { ConcessionaireService } from 'src/app/services/concessionaire.service';

@Component({
	selector: 'app-save',
	templateUrl: './save.component.html',
	styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
	@Output() emision: EventEmitter<string> = new EventEmitter();
	@Input() modal: any;
	@Input() dataUpdate: any;
	cities: any;
	concessionaires: any;
	name: string;
	lastname: string;
	city: string;
	concessionaire: string;
	phone: string;
	address: string;
	id: number;
	edit:boolean = false;

	constructor(
		private citiesService: CitiesService,
		private concessionaireService: ConcessionaireService,
		private clientService: ClientService
	) { }

	ngOnInit(): void {
		this.getCities();
		this.getConcessionaire();
		this.id = this.clientService.getId();
		this.validate();
		
	}

	getCities() {
		this.citiesService.get().subscribe(data => {
			this.cities = data;
		})
	}

	getConcessionaire() {
		this.concessionaireService.get().subscribe(data => {
			this.concessionaires = data;
		})
	}

	validate() {
		if(this.dataUpdate.length > 0) {
			let data = this.clientService.getOne(this.dataUpdate);
			console.log(data);
			this.edit = true;
			this.name = data.name;
			this.lastname = data.lastname;
			this.city = data.city;
			this.concessionaire = data.concessionaire;
			this.phone = data.phone;
			this.address = data.address;
			this.id = data.id;
		}
	}

	data() {
		let data = {
			"name": this.name,
			"lastname": this.lastname,
			"city": this.city,
			"concessionaire": this.concessionaire,
			"phone": this.phone,
			"address": this.address,
			"status": 'Activo',
			"id": this.id
		};
		return data;
	}

	onSubmit(){
		this.clientService.add(this.data());
		this.onSend();
	}

	onSubmit2(){
		this.clientService.update(this.data());
		this.onSend();
	}

	onSend() {
		this.emision.emit('Datos guardados con exito!');
	}

}
