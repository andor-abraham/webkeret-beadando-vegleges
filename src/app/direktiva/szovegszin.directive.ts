import { Directive, ElementRef, Renderer2, Input, SimpleChanges, OnChanges  } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone:true
})
export class SzovegszinDirective implements OnChanges{
  @Input('appTextColor') textColor: string = '#223322';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['textColor']) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor || '#000000');
    }
  }
}
