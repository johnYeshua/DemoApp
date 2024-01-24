import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective{

  constructor(eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
    eleRef.nativeElement.style.background = 'yellow';
   }

}
