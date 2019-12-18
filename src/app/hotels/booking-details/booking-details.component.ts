import { Component, OnInit ,ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
