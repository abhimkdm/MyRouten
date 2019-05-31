import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, rd: Renderer) {
    // console.log(el);
    // console.log(el.nativeElement);
     el.nativeElement.style.color ="blue";
    //rd.setElementStyle(el.nativeElement,'color','red');
   }

   @HostListener('mouseenter') onmouseenter(){
      this.highlight('Grey');
   }

   @HostListener('mouseleave') onmouseleave() {
     this.highlight(null);
   }

   highlight(color: string) {
     this.el.nativeElement.style.background =color;
   }
}
