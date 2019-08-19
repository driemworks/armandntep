import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  slides = null;

  @ViewChild(SlickCarouselComponent, null) slickModal: SlickCarouselComponent;
  slideConfig = null;

  constructor() { }

  ngOnInit() {
    this.slides = [
      { videoSource: 'https://www.youtube.com/embed/KFKD1jLHNaw', index: 0},
      { videoSource: 'https://www.youtube.com/embed/In0WH7BY8MY', index: 1},
      { videoSource: 'https://www.youtube.com/embed/G8VtsDrRRsA', index: 2}
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

  getVideo() {
    return 'https://www.youtube.com/embed/G8VtsDrRRsA';
  }

  slickPrev() {
    this.slickModal.slickPrev();
  }

  slickNext() {
    this.slickModal.slickNext();
  }

}
