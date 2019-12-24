import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ProfileComponent } from './profile/profile.component';
import { FilterBookingComponent } from './filter-booking/filter-booking.component';
@NgModule({
  declarations: [DashboardHeaderComponent, DashboardContentComponent, DashboardSidenavComponent, DashboardHomeComponent, ProfileComponent, FilterBookingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BsDropdownModule.forRoot(),
    PanelMenuModule,
    CollapseModule.forRoot(),
    RadioButtonModule
    
  ]
})
export class DashboardModule { }
