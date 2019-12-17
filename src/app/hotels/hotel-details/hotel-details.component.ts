import { Component, OnInit ,TemplateRef} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
    modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom:number;
    
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.setCurrentLocation();

      this.galleryOptions = [
          {
              width: '100%',
              height: '600px',
              thumbnailsColumns: 4,
              imageAnimation: NgxGalleryAnimation.Slide,
              "imageAutoPlay": true, "imageAutoPlayPauseOnHover": true,
               "previewAutoPlay": true, "previewAutoPlayPauseOnHover": true,
               imageAutoPlayInterval:5000,
               "imageArrowsAutoHide": true, "thumbnailsArrowsAutoHide": true
          },
          // max-width 800
          {
              breakpoint: 800,
              width: '100%',
              height: '600px',
              imagePercent: 80,
              thumbnailsPercent: 20,
              thumbnailsMargin: 20,
              thumbnailMargin: 20
          },
          // max-width 400
          {
              breakpoint: 400,
              preview: false
          }
      ];

      this.galleryImages = [
          {
              small: 'assets/img/pic 1.jpg',
              medium: 'assets/img/pic 1.jpg',
              big: 'assets/img/pic 1.jpg'
          },
          {
              small: 'assets/img/pic 2.jpg',
              medium: 'assets/img/pic 2.jpg',
              big: 'assets/img/pic 2.jpg'
          },
          {
            small: 'assets/img/pic 3.jpg',
            medium: 'assets/img/pic 3.jpg',
            big: 'assets/img/pic 3.jpg'
        },
        {
          small: 'assets/img/pic 4.jpg',
          medium: 'assets/img/pic 4.jpg',
          big: 'assets/img/pic 4.jpg'
      },
      ];
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }

}

openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
