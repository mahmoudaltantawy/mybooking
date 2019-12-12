import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ContentComponent} from './content/content.component';
import {ResultComponent} from './result/result.component';
import{ContainerloginandregisterComponent} from './containerloginandregister/containerloginandregister.component';
import { RegisterComponent } from './register/register.component';
import{RetrivebookComponent} from './retrivebook/retrivebook.component';
import{FlightdetailsComponent} from './flightdetails/flightdetails.component';
import { TravellersDataComponent } from './travellers-data/travellers-data.component';
import{HotelHomeComponent} from './hotels/hotel-home/hotel-home.component';
import { ConsolidatorComponent } from './consolidator/consolidator.component';
import { HotelResultComponent } from './hotels/hotel-result/hotel-result.component';
import { HotelFormSerachComponent } from './hotels/hotel-search/hotel-form-serach/hotel-form-serach.component';
//hotels

const routes: Routes = [
  {path:'',component:ContentComponent},
  {path:'results',component:ResultComponent},
  {path:'sign',component:ContainerloginandregisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'retrive',component:RetrivebookComponent},
  {path:'flight-details',component:FlightdetailsComponent},
  {path:'traveller-data',component:TravellersDataComponent},
  {path:'hotel-home',component:HotelHomeComponent},
  {path:'coonsolidator',component:ConsolidatorComponent},
  {path:'hotel-result',component:HotelResultComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
