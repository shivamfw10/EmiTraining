import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @Input() HighlightDirective='';
  constructor(private el:ElementRef) {
    //this.el.nativeElement.style.backgroundColor ='yellow';
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');

  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('blue');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
