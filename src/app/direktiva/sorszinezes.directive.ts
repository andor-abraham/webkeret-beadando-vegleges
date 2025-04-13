import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRowHighlight]',
  standalone:true
})
export class SorszinezesDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const rows = this.el.nativeElement.querySelectorAll('tr');
    rows.forEach((row: HTMLElement, index: number) => {
      if ((index + 1) % 2 === 0) {
        this.renderer.setStyle(row, 'background-color', 'lightblue');
        this.renderer.setStyle(row, 'color', 'white');
      }
    });
  }
}
