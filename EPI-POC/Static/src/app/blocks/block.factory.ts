import { TestblockComponent } from "./testblock/testblock.component";
import { ComponentFactory } from "@angular/core";
import { BlockComponent } from "./block.component";
import { Block } from "./block";
import { ImageblockComponent } from "./imageblock/imageblock.component";

export class BlockFactory {
  static getBlockComponent(blockType: string): BlockComponent<Block> | any {
    if (BlockComponent.extendedBy)
      return BlockComponent.extendedBy.find(block => (<BlockComponent<Block>>new block)._block_identifier == blockType);
    else return null;
  }
}
