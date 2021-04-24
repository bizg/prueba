import { NgModule } from '@angular/core';

import { ClientsRouting } from './clients.routing';
import { ClientsComponent } from './clients.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SaveComponent } from './modals/save/save.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/services/clients.service';
import { CitiesService } from 'src/app/services/cities.service';
import { ConcessionaireService } from 'src/app/services/concessionaire.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientsComponent,
    SaveComponent,
    DeleteComponent,
  ],
  imports: [
    ClientsRouting,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[SaveComponent],
  providers: [
    NgbActiveModal ,
    SaveComponent,
    DeleteComponent,
    ClientService,
    CitiesService, 
    ConcessionaireService
  ],
  exports: [SaveComponent,DeleteComponent],
  bootstrap: [SaveComponent,DeleteComponent],
})
export class ClientsModule { }
