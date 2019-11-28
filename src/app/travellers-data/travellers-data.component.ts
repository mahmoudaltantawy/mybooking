import { Component, OnInit, TemplateRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-travellers-data',
    templateUrl: './travellers-data.component.html',
    styleUrls: ['./travellers-data.component.scss'],

})
export class TravellersDataComponent implements OnInit {


    showCaret: boolean = false;
    items: MenuItem[];
    activeIndex: number = 1;
    basePath;
    traveller_data: FormGroup;
    modalRef: BsModalRef;
    show: boolean = true;
    constructor(private fb: FormBuilder, private modalService: BsModalService) { }


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

        this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
        this.traveller_data = this.fb.group({

            title: null,
            firstname: '',
            secondname: '',
            lastname: '',
            birthday: null,
            phone: null,
            nationality: null,
            gender: null,
            add_meal: null,
            expiration: null,
            email: null,
            Passport_id: null

        });
    }

    toggle_caret() {
        this.showCaret = !this.showCaret;
        let element = document.getElementById("caret");
        element.classList.toggle("transform");
    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
}

