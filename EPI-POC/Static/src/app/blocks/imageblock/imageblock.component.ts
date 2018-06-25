import { Component, OnInit } from '@angular/core';
import { Imageblock } from './imageblock';
import { BlockComponent, BlockDecorator } from '../../shared/episerver';

@Component({
  selector: 'app-imageblock',
  templateUrl: './imageblock.component.html',
  styleUrls: ['./imageblock.component.css']
})
@BlockDecorator({
  blockIdentifier: 'imagefile'
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
