import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ContentComponent } from './content/content.component';
import { ResultComponent } from './result/result.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { ContainerloginandregisterComponent } from './containerloginandregister/containerloginandregister.component';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RetrivebookComponent } from './retrivebook/retrivebook.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TravellersDataComponent } from './travellers-data/travellers-data.component';
import {StepsModule,MenuItem} from 'primeng/primeng';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; 
import {PanelModule} from 'primeng/panel';
import { SeatsComponent } from './seats/seats.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { TicketComponent } from './ticket/ticket.component';
import { DummycontentComponent } from './hotels/dummycontent/dummycontent.component';
import { HotelHomeComponent } from './hotels/hotel-home/hotel-home.component';
import { HotelSearchComponent } from './hotels/hotel-search/hotel-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ContentComponent,
    ResultComponent,
    FlightFormComponent,
    FilterComponent,
    LoginComponent,
    ContainerloginandregisterComponent,
    RegisterComponent,
    RetrivebookComponent,
    FlightdetailsComponent,
    TravellersDataComponent,
    SeatsComponent,
    PaymentComponent,
    ConfirmationComponent,
    TicketComponent,
    
    DummycontentComponent,
    
    HotelHomeComponent,
    
    HotelSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    TabsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    StepsModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    PanelModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
