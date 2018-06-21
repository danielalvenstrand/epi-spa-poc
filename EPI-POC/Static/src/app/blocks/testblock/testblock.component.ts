import { Component, OnInit, Input } from '@angular/core';
import { BlockComponent, BlockIdentifier } from '../block.component';
import { Testblock } from './testblock';
import hierarchyTracked from '../../shared/hierarchy-tracked';

@Component({
  selector: 'app-testblock',
  templateUrl: './testblock.component.html',
  styleUrls: ['./testblock.component.css'],
})
@hierarchyTracked export class TestblockComponent extends BlockComponent<Testblock> implements BlockIdentifier, OnInit {

  _block_identifier = "testblock";
  model: Testblock;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
