import { Component, OnInit } from '@angular/core';
import { BlockComponent, BlockIdentifier } from '../block.component';
import { Imageblock } from './imageblock';
import hierarchyTracked from '../../shared/hierarchy-tracked';

@Component({
  selector: 'app-imageblock',
  templateUrl: './imageblock.component.html',
  styleUrls: ['./imageblock.component.css']
})
@hierarchyTracked export class ImageblockComponent extends BlockComponent<Imageblock> implements BlockIdentifier, OnInit {

  _block_identifier = "imagefile";
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
