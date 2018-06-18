import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[block-area-host]'
})
export class BlockAreaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
