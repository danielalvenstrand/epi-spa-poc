import { Input, HostBinding } from '@angular/core';
import { Block } from './block';

/** Every block component needs to implement the BlockIdentifier interface. */
export interface BlockIdentifier {

  /** Identifies the block component as an Episerver block. */
  _block_identifier: string;
}

/**
 * BlockComponent is extended by every block component
 * and is defined by the model T which in turn extends the Block model interface.
 */

export abstract class BlockComponent<T extends Block> implements BlockIdentifier {

  _block_identifier: string;

  /** Adds the .block class to the host. */
  @HostBinding('class.block') true;

  /** Takes the model of type T when created in a page component. */
  @Input() model: T;

}
