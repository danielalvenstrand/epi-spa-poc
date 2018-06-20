import { Block } from "../block";

export interface Testblock extends Block {
  name: { value: string };
  contentType: string[];
}
