import { Block } from "../../shared/episerver";

export interface Testblock extends Block {
  name: { value: string };
  contentType: string[];
}
