import { Page, BlockArea } from "../../shared/episerver";

export interface Testpage extends Page {
  heading: { value: string };
  mainBody: { value: string };
  blockArea: BlockArea;
}
