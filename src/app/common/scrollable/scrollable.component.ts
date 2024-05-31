import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.css']
})
export class ScrollableComponent {

  // @Input() scroller:any;

  @ViewChild('content', { static: true }) scroller!: ElementRef;

  scrollLeft() {
    this.scroller.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }

  scrollRight() {
    this.scroller.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }
}
