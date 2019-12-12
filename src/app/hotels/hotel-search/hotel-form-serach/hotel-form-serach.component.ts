import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup } from '@angular/forms';

@Component({
  selector: 'hotel-form-search',
  templateUrl: './hotel-form-serach.component.html',
  styleUrls: ['./hotel-form-serach.component.scss']
})
export class HotelFormSerachComponent implements OnInit {
  hotel_search:FormGroup;
  basePath;
  constructor(private fb:FormBuilder) { }

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
