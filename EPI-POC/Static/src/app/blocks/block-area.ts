import { Block } from "./block";

/**
 * BlockArea interface defines the model for a block area
 * provided by the Content Delivery API.
 */
export interface BlockArea {

  /**
   * The expanded value contains data for
   * all blocks in the block area
   */
  expandedValue: Block[];
}
