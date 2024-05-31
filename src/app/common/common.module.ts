import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ScrollableComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent,FooterComponent,ScrollableComponent
  ]
})
export class myCommonModule { }
