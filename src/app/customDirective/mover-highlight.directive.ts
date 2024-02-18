import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoverHighlight]'
})
export class MoverHighlightDirective {

  constructor(private element:ElementRef) { }
  
  @HostListener('mouseenter')
  OnMouseEnter(){
    this.element.nativeElement.style.backgroundColor='yellow';
  }
  @HostListener('mouseleave')
  OnMouseLeave(){
    this.element.nativeElement.style.backgroundColor='initial';
  }
}
