import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
 
export class HighlightDirective {

  @Input() appHighlight='';
  @Input() appFontWeight='';
  @Input() appTextSize='';
  @Input() appBgColor='';
  constructor(private el:ElementRef) {
   // this.el.nativeElement.style.backgroundColor ='yellow';
    this.el.nativeElement.style.fontSize='';
   }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight='red',this.appTextSize='40px',this.appBgColor='yellow',this.appFontWeight='700');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('','','','');
  }
  
  private highlight(color: string,textSize:string,bgColor:string,fontWeight:string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontSize=textSize;
    this.el.nativeElement.style.backgroundColor=bgColor;
    this.el.nativeElement.style.fontWeight=this.appFontWeight;
  }

}
