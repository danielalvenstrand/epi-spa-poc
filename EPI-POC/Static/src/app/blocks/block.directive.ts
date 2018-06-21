import { Directive, ViewContainerRef } from '@angular/core';

/** BlockDirective is used to create a QueryList for a block area in a page. */
@Directive({
  selector: '[block-host]'
})
export class BlockDirective {

  /**
   * Injects the ViewContainerRef in order to create a component for it.
   * @param viewContainerRef references the container element in the view.
   */
  constructor(public viewContainerRef: ViewContainerRef) {}

}
