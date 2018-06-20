import { Component, OnInit } from '@angular/core';
import { BlockComponent } from '../block.component';
import { Imageblock } from './imageblock';

@Component({
  selector: 'app-imageblock',
  templateUrl: './imageblock.component.html',
  styleUrls: ['./imageblock.component.css']
})
export class ImageblockComponent extends BlockComponent<Imageblock> implements OnInit {

  model: Imageblock;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  getImageUrl(): string {
    return location.protocol + '//' + location.host + this.model.url;
  }

}
