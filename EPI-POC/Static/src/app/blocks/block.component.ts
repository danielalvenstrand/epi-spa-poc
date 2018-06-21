import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Block } from './block';

export interface BlockIdentifier {
  _block_identifier: string;
}

@Component({
})
export abstract class BlockComponent<T extends Block> implements BlockIdentifier {

  _block_identifier: string;
  @HostBinding('class.block') true;
  @Input() model: T;

}
