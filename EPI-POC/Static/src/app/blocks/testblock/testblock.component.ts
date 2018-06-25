import { Component, OnInit, Input } from '@angular/core';
import { Testblock } from './testblock';
import { BlockComponent, BlockDecorator } from '../../shared/episerver';

@Component({
  selector: 'app-testblock',
  templateUrl: './testblock.component.html',
  styleUrls: ['./testblock.component.css'],
})
@BlockDecorator({
  blockIdentifier: 'testblock'
})
export class TestblockComponent extends BlockComponent<Testblock> implements OnInit {
  
  model: Testblock;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
