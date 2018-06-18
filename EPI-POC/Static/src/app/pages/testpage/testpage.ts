import { BlockArea } from "../../blocks/block-area";

export interface Testpage {
  heading: { value: string };
  mainBody: { value: string };
  blockArea: BlockArea;
}
