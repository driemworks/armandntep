import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}

export interface Image {
  title: string;
  url: string;
}

const IMAGES: Image[] = [
  { title: 'We are covered', url: 'assets/images/armand-arms-up.jpg' },
];
