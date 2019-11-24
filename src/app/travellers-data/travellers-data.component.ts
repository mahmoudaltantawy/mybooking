import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-travellers-data',
  templateUrl: './travellers-data.component.html',
  styleUrls: ['./travellers-data.component.scss'],
  
})
export class TravellersDataComponent implements OnInit {

  constructor() { }
  showCaret:boolean = false;
  items: MenuItem[];

  activeIndex: number = 1;
    ngOnInit() {
      this.items = [{
        label: 'Search Flight',
        command: () => {
            this.activeIndex = 0;
        }
    },
    {
        label: 'Traveller Details',
        command: () => {
            this.activeIndex = 1;
        }
    },
    {
        label: 'Payment Details',
        command: () => {
            this.activeIndex = 2;
        }
    },
    {
        label: 'Confirmation',
        command: () => {
            this.activeIndex = 3;
        }
    }

       
  ];
}
toggle_caret(){
    this.showCaret = !this.showCaret;
    let element = document.getElementById("caret");
    element.classList.toggle("transform");
}
}

