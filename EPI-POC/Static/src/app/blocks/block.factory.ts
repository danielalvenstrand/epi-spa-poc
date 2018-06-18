import { TestblockComponent } from "./testblock/testblock.component";
import { ComponentFactory } from "@angular/core";

const BLOCK_ID = {
  "TestBlock": TestblockComponent
};

export class BlockFactory {
  static getBlockComponent(blockType: string): any {
    return BLOCK_ID[blockType];
  }
}
