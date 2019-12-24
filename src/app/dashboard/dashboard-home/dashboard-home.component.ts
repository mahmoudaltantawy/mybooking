import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("header").style.display = 'none';
    document.getElementById("footer").style.display = 'none';
  }

}
