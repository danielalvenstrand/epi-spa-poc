import { Block } from "../block";

export interface Imageblock extends Block {
  name: string;
  url: string;
  contentType: string[];
}
