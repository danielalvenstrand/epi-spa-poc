import { ActivatedRoute } from "@angular/router";
import { EpiserverService } from "../services/episerver.service";
import { Page } from './page';
import { QueryList, ComponentFactoryResolver, Injector, ChangeDetectorRef, NgZone, AfterViewInit } from "@angular/core";
import { BlockDirective } from "../block/block.directive";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { BlockFactory } from "../block/block.factory";
import { BlockComponent } from "../block/block.component";
import { Observable } from "rxjs";
import { Block } from "../block/block";

/**
 * PageComponent is extended by every page component with the
 * model T that in turn extends the Page model interface.
 */
export abstract class PageComponent<T extends Page> implements AfterViewInit {
  id: number;
  model: T;
  blockArea: QueryList<BlockDirective>;

  /**
   * The page id is extracted from the current route.
   * Initializes the EpiserverService and subscribes to the contentSaved event.
   * Uses the page id and work id to get content from the Content Delivery Api.
   * @param route the current route.
   * @param componentFactoryResolver used to resolve block components.
   * @param zone used to fix changes in model by observables not triggering view updates.
   * @param episerver the EpiserverService useds to fetch page and block models.
   */
  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private zone: NgZone,
    private episerver: EpiserverService
  ) {
    this.route.data.subscribe(
      data => this.id = data.id,
      e => console.error(e)
    );
    
    this.episerver.init().then(() => {
      this.episerver.contentSaved<T>()
        .subscribe((updatedModel: T) => {
          this.updateContent(updatedModel);
        });
    });

    const workid = window['WorkID'];

    this.episerver.getContent<T>(this.id, workid)
      .subscribe(
        (result: T) => {
          this.updateContent(result);
        },
        e => console.error(e)
      );
  }

  /** Creates a microtask to inject the components when view is loaded. */
  ngAfterViewInit() {
    this.blockArea.changes.subscribe(() => Promise.resolve(null).then(() => this.loadBlocks()));
  }

  /**
   * Updates the model inside Angular zone to trigger change detection.
   * @param model the new model provided.
   */
  updateContent(model: T): void {
    this.zone.run(() => this.model = model);
  }

  /**
   * Iterates over each block in the block area
   * and resolves each block host as a block component
   * using the block factory.
   */
  loadBlocks(): void {
    this.blockArea.toArray().forEach((host: BlockDirective, index: number) => {
      const model: Block = this.model.blockArea.expandedValue[index];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        BlockFactory.getBlockComponent(model.contentType[model.contentType.length -1])
        );

        const viewContainerRef = host.viewContainerRef;
        viewContainerRef.clear();

          const componentRef = viewContainerRef.createComponent(componentFactory);
        (<BlockComponent<Block>>componentRef.instance).model = model;
      });
  }


}
