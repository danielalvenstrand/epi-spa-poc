import { Input, HostBinding } from '@angular/core';
import { Block } from './block';

/**
 * BlockComponent is extended by every block component
 * and is defined by the model T which in turn extends the Block model interface.
 */

export abstract class BlockComponent<T extends Block> {

  /** Adds the .block class to the host. */
  @HostBinding('class.block') true;

  /** Takes the model of type T when created in a page component. */
  @Input() model: T;

}
