import { Component, OnInit, Input } from '@angular/core';
import { BlockComponent } from '../block.component';
import { Testblock } from './testblock';

@Component({
  selector: 'app-testblock',
  templateUrl: './testblock.component.html',
  styleUrls: ['./testblock.component.css']
})
export class TestblockComponent extends BlockComponent implements OnInit {

  model: Testblock;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
