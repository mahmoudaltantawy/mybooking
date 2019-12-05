import { Component, OnInit,ViewChild,TemplateRef } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.scss']
})
export class FlightdetailsComponent implements OnInit {
 dummyComponet:any;
 modalRef: BsModalRef;
 show:boolean = true;
 constructor(private modalService: BsModalService) {}

 openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template);
   
 }
 


  ngOnInit() {
  
  }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  

}
