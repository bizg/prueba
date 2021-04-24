import { NgModule } from '@angular/core';

import { SidenavComponent } from './sidenav/sidenav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    SidenavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
