import { TestblockComponent } from "./testblock/testblock.component";
import { ComponentFactory } from "@angular/core";
import { BlockComponent } from "./block.component";

const BLOCK_ID = {
  "TestBlock": TestblockComponent
};

export class BlockFactory {
  static getBlockComponent(blockType: string): BlockComponent | any {
    return BLOCK_ID[blockType];
  }
}
