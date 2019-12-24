import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2 = false;
  isCollapsed3 = false;

  toggle_menu() {
   
    let element = document.getElementById("sidebar");
    element.classList.toggle("active");
}

}
