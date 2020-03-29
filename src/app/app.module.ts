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
import { ConsolidatorComponent } from './consolidator/consolidator.component';
import { CarouselModule } from 'ngx-bootstrap';
import { HotelResultComponent } from './hotels/hotel-result/hotel-result.component';
import { HotelFilterComponent } from './hotels/hotel-filter/hotel-filter.component';
import { HotelFormSerachComponent } from './hotels/hotel-search/hotel-form-serach/hotel-form-serach.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import { AgmCoreModule } from '@agm/core';
 import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HotelTravellersDataComponent } from './hotels/hotel-travellers-data/hotel-travellers-data.component';
import { HotelPaymentComponent } from './hotels/hotel-payment/hotel-payment.component';
import { HotelConfirmationComponent } from './hotels/hotel-confirmation/hotel-confirmation.component';
import { BookingDetailsComponent } from './hotels/booking-details/booking-details.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import{AngularFireModule} from '@angular/fire'

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
    
    HotelSearchComponent,
    
    ConsolidatorComponent,
    
    HotelResultComponent,
    
    HotelFilterComponent,
    
    HotelFormSerachComponent,
    
    HotelDetailsComponent,
    
    HotelTravellersDataComponent,
    
    HotelPaymentComponent,
    
    HotelConfirmationComponent,
    
    BookingDetailsComponent
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
    PanelModule,
    CarouselModule.forRoot(),
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBj73Uq3eXcvsuoXQ5U7ouYzfx6a1FedFY'
      
    }),
     TooltipModule.forRoot(),
     CollapseModule.forRoot(),
     AngularFireModule.initializeApp({
      apiKey: "AIzaSyCgCXzFYKooSn91cvIBcXAJeCZkePHi958",
      authDomain: "booking-ca877.firebaseapp.com",
      databaseURL: "https://booking-ca877.firebaseio.com",
      projectId: "booking-ca877",
      storageBucket: "booking-ca877.appspot.com",
      messagingSenderId: "6862984374",
      appId: "1:6862984374:web:127d203aa29d16a4948217",
      measurementId: "G-BKY33GKCW2"
    })
   

    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
