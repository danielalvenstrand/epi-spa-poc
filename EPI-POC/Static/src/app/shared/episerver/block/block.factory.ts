import { ComponentFactory } from "@angular/core";
import { BlockComponent } from "./block.component";
import { Block } from "./block";
import { BlockDescription } from "./block.decorator";

/**
 * BlockFactory takes a blockType string provided by the Content Delivery API
 * and returns a block component with the corresponding blockIdentifier.
 */
export class BlockFactory {

  /**
   * Returns a block component corresponding to block type provided.
   * @param blockType string provided by Content Delivery API, e.g. "imagefile".
   */
  static getBlockComponent(blockType: string): BlockComponent<Block> | any {
    if (BlockComponent.extendedBy) 
      return BlockComponent.extendedBy.find(block => (<BlockDescription>block['description']).blockIdentifier == blockType);
    else return null;
  }
}
