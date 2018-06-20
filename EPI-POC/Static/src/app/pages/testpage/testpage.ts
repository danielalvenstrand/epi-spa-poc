import { BlockArea } from "../../blocks/block-area";
import { Page } from "../page";

export interface Testpage extends Page {
  heading: { value: string };
  mainBody: { value: string };
  blockArea: BlockArea;
}
