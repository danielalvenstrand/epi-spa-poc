import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Block } from './block';

@Component({
})
export abstract class BlockComponent<T extends Block> {

  @HostBinding('class.block') true;
  @Input() model: T;

}
