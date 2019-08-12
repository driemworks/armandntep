import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  title = 'ngSlick';


  slides = [
    { img: '../assets/images/black-composers/1.jpg' },
    { img: '../assets/images/black-composers/2.jpg' },
    { img: '../assets/images/black-composers/3.jpg' },
    { img: '../assets/images/black-composers/4.jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<div class="nav-btn next-slide">NEXT</div>`,
    prevArrow: `<div class="nav-btn prev-slide">PREV</div>`,
    enabled: true,
    center: true,
    dots: true,
    infinite: false
  };

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
