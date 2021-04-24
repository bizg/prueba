import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClientService } from 'src/app/services/clients.service';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
	@Output() emision: EventEmitter<string> = new EventEmitter();
	@Input() modal: any;
	@Input() data: any;

	constructor(private clientService: ClientService) { }

	ngOnInit(): void {
	}

	onSubmit() {
		console.log(this.data);
		this.clientService.delete(this.data.id);
		this.onSend();
	}

	onSend() {
		this.emision.emit('Datos eliminados con exito!');
	}

}
