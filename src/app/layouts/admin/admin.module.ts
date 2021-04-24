import { NgModule } from '@angular/core';

import { AdminRouting } from './admin.routing';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminRouting,
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
})
export class AdminModule { }
