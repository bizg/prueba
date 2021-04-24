import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/clients.service';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
	styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
	closeResult: string = '';
	clients: any;
	data: any;
	dataUpdate: any = [];

	constructor(
		private modalService: NgbModal,
		private clientService: ClientService
	) { }

	ngOnInit(): void {
		this.getClients();
	}

	getClients() {
		this.clientService.getInitial();
		this.clients = this.clientService.getAll();
	}

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	onCreate() {
		this.dataUpdate = [];
	}

	onUpdate(data){
		this.dataUpdate.push(data);
	}

	onDelete(data){
		this.data = data;
	}

	onSend(mensaje) {
		console.log(mensaje);
		this.clients = this.clientService.getAll();
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
