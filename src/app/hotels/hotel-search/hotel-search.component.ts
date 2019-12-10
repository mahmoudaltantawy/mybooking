import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {
  hotel_search:FormGroup;
  basePath;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
    this.hotel_search = this.fb.group({
      origin: '',
      destination: '',
      departure: '',
      return: '',
      nationality:null,
      residence:null,
      nights:null

  });
  }

}
