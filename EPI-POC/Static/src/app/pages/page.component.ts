import { ActivatedRoute } from "@angular/router";
import { EpiserverService } from "../shared/services/episerver.service";
import { Page } from './page';
import { QueryList, ComponentFactoryResolver, Injector, ChangeDetectorRef, NgZone, AfterViewInit } from "@angular/core";
import { BlockDirective } from "../blocks/block.directive";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { BlockFactory } from "../blocks/block.factory";
import { BlockComponent } from "../blocks/block.component";
import { Observable } from "rxjs";
import { Block } from "../blocks/block";

export abstract class PageComponent<T extends Page> implements AfterViewInit {
  id: number;
  model: T;
  blockArea: QueryList<BlockDirective>;

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
          //const model = <T>{ ...(<Page>this.model), ...(<Page>updatedModel) };
          this.updateContent(updatedModel);
        });
    });

    const workid = Window['WorkID'];

    this.episerver.getContent<T>(this.id, workid)
      .subscribe(
        (result: T) => {
          this.updateContent(result);
        },
        e => console.error(e)
      );
  }

  ngAfterViewInit() {
    // Creates a microtask to inject the components when view is loaded.
    this.blockArea.changes.subscribe(() => Promise.resolve(null).then(() => this.loadBlocks()));
  }

  updateContent(model: T): void {
    this.zone.run(() => this.model = model);
  }

  loadBlocks() {
    this.blockArea.toArray().forEach((host: BlockDirective, index: number) => {
      const model: Block = this.model.blockArea.expandedValue[index];

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        BlockFactory.getBlockComponent(model.contentType[model.contentType.length -1].toLowerCase())
        );

        const viewContainerRef = host.viewContainerRef;
        viewContainerRef.clear();

          const componentRef = viewContainerRef.createComponent(componentFactory);
        (<BlockComponent<Block>>componentRef.instance).model = model;
      });
  }


}
