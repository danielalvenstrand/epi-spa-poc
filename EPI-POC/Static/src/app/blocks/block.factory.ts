import { TestblockComponent } from "./testblock/testblock.component";
import { ComponentFactory } from "@angular/core";
import { BlockComponent } from "./block.component";
import { Block } from "./block";
import { ImageblockComponent } from "./imageblock/imageblock.component";

const BLOCK_ID = {
  "testblock": TestblockComponent,
  "imagefile": ImageblockComponent
};

export class BlockFactory {
  static getBlockComponent(blockType: string): BlockComponent<Block> | any {
    return BLOCK_ID[blockType];
  }
}
