import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  title = 'ngSlick';

  slides = [];
  slideConfig = null;

  @ViewChild(SlickCarouselComponent, null) slickModal: SlickCarouselComponent;

  ngOnInit() {
    this.slides = [
      { img: '../assets/images/black-composers/1.jpg' },
      { img: '../assets/images/black-composers/2.jpg' },
      { img: '../assets/images/black-composers/3.jpg' },
      { img: '../assets/images/black-composers/4.jpg' },
    ];

    this.slideConfig = {
      slidesToShow: 1,
      slidesToScroll: 1,
      center: true,
      dots: true,
      arrows: false,
      infinite: false
    };
  }

  slickPrev() {
    this.slickModal.slickPrev();
  }

  slickNext() {
    this.slickModal.slickNext();
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


}
