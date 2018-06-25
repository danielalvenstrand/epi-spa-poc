import { BlockArea } from "../block/block-area";

/** All page model interfaces extends the Page interface. */
export interface Page {

  /** Each page may have a blockArea. */
  blockArea?: BlockArea;
}
