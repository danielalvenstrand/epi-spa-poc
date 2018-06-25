import { Block } from "../../shared/episerver";

export interface Imageblock extends Block {
  name: string;
  url: string;
  contentType: string[];
}
