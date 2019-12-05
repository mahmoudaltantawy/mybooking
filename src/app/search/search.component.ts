import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  traveller_data: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.traveller_data = this.fb.group({

    
      origin: '',
      destination: '',
      departure: '',
      return: '',
      

  });
  }

}
