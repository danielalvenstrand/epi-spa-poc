import { Component, ViewChild, QueryList, ComponentFactoryResolver, NgZone } from "@angular/core";
import { BlockDirective } from "./block.directive";
import { ActivatedRoute } from "@angular/router";
import { EpiserverService } from "../services/episerver.service";
import { Block } from "./block";
import { BlockFactory } from "./block.factory";
import { BlockComponent } from "./block.component";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-block-view',
  template: `<ng-template block-host></ng-template>`,
  providers: [
    HttpClient
  ]
})
export class BlockViewComponent {
  blockRef: BlockComponent<Block>;
  @ViewChild(BlockDirective) block: BlockDirective;

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private zone: NgZone,
    private episerver: EpiserverService
  ) {

    this.episerver.init().then(() => {
      this.episerver.contentSaved<Block>()
        .subscribe((updatedModel: Block) => {
          this.loadBlockContent();
        });
    });

    this.loadBlockContent();

  }

  loadBlockContent(): void {
    const id = window['BlockID'];
    console.log("id", id)
    const workid = window['BlockWorkID'];
    console.log("workid", workid)

    this.episerver.getContent<Block>(id, workid)
      .subscribe(
      (result: Block) => {
        this.loadBlock();
        this.updateContent(result);
          
        },
        e => console.error(e)
      );
  }

  updateContent(model: Block): void {
    this.zone.run(() => this.blockRef.model = model);
  }

  loadBlock(): void {
    if (!this.blockRef) {
      const type = window['BlockType'];
      console.log("type", type)

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        BlockFactory.getBlockComponent(type)
      );

      const viewContainerRef = this.block.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      this.blockRef = <BlockComponent<Block>>componentRef.instance;
    }
  }
}

export const BLOCK_VIEW_PATH = 'block-view';

export const BlockViewRoute = {
  path: BLOCK_VIEW_PATH, component: BlockViewComponent
}
