import { Directive, HostListener, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

type AttributeMapArray = Array<{ attribute: string, minValue: number, maxValue: number }>;

@Directive({
  selector: '[appParallax]',
  exportAs: 'appParallax'
})
export class ParallaxDirective implements OnInit {

  @Input() type;
  @Input() parallaxRatio;
  minTop = 1000;
  @Input() minLeft = 0;

  @Input() styleAttributes: AttributeMapArray = null;
  @Input() enabled = true;

  mouseDown = false;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (!this.styleAttributes) {
      if (this.type === 'scrollX') {
        this.styleAttributes = [{
          attribute: 'marginLeft',
          minValue: 0,
          maxValue: 2000
        }];
      } else if (this.type === 'cursorX') {
        this.styleAttributes = [{
          attribute: 'marginLeft',
          minValue: -100,
          maxValue: 2000
        }];
      } else if (this.type === 'scrollY') {
        console.log('scrollY chosen');
        this.styleAttributes = [{
          attribute: 'top',
          minValue: -1000,
          maxValue: 2000
        }];
      } else if (this.type === 'cursorY') {
        this.styleAttributes = [{
          attribute: 'top',
          minValue: -1000,
          maxValue: 2000
        }];
      } else if (this.type === 'cursor') {
        this.styleAttributes = [{
            attribute: 'marginLeft',
            minValue: -20,
            maxValue: 2000
        }, {
            attribute: 'top',
            minValue: -1000,
            maxValue: 2000
          }];
      }
    }
    // this.minTop = this.eleRef.nativeElement.getBoundingClientRect().top;
    // this.minLeft = this.eleRef.nativeElement.getBoundingClientRect().left;
  }

  updateElement(value) {
    for (const style of this.styleAttributes) {
      if (value < style.maxValue) {
        const valuePx = value + 'px';
        this.renderer.setStyle(this.eleRef.nativeElement, style.attribute, valuePx);
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onmousemove(event: MouseEvent) {
    if (this.enabled) {
      if (this.type === 'cursorX') {
        this.cursorX(event);
      } else if (this.type === 'cursorY') {
        this.cursorY(event);
      } else if (this.type === 'cursor') {
        this.cursorX(event);
        this.cursorY(event);
      }
    }
  }

  cursorX(event) {
    const x = event.clientX;
    const left = this.minLeft - (x * this.parallaxRatio);
    this.updateElement(left);
  }

  cursorY(event) {
    const y = event.clientY;
    const top = this.minTop - (y * this.parallaxRatio);
    this.updateElement(top);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    if (this.enabled) {
      if (this.type === 'scrollX') {
        this.scrollX();
      } else if (this.type === 'scrollY') {
        this.scrollY();
      } else if (this.type === 'scroll') {
        this.scrollX();
        this.scrollY();
      }
    }
  }

  scrollX() {
    const left = this.minLeft - (window.scrollX * this.parallaxRatio);
    this.updateElement(left);
  }

  scrollY() {
    console.log('scrolling y direction');
    const top = this.minTop - (window.scrollY * this.parallaxRatio);
    this.updateElement(top);
  }

}
