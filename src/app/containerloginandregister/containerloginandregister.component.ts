import { Component, OnInit,ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-containerloginandregister',
  templateUrl: './containerloginandregister.component.html',
  styleUrls: ['./containerloginandregister.component.scss']
})
export class ContainerloginandregisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
 
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
