import { ActivatedRoute } from "@angular/router";
import { EpiserverService } from "../shared/services/episerver.service";
import { Page } from './page';
import { QueryList, ComponentFactoryResolver, Injector, AfterViewInit, ChangeDetectorRef, NgZone } from "@angular/core";
import { BlockDirective } from "../blocks/block.directive";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { BlockFactory } from "../blocks/block.factory";
import { BlockComponent } from "../blocks/block.component";
import { Observable } from "rxjs";

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
          const model = <T>{ ...(<Page>this.model), ...(<Page>updatedModel) };
          console.log(model, this.model)
          this.updateContent(model);
        });
    });
  }

  ngAfterViewInit() {
    const workid = Window['WorkID'];
    this.episerver.getContent<T>(this.id, workid)
      .subscribe(
      (result: T) => {
        this.updateContent(result);
        this.loadBlocks();
        },
        e => console.error(e)
      );
  }

  updateContent(model: T): void {
    this.zone.run(() => this.model = model);
  }

  loadBlocks() {
    this.blockArea.changes.subscribe(() => {
      this.blockArea.toArray().forEach((host: BlockDirective, index: number) => {
        const contentLink = this.model.blockArea.value[index].contentLink;
        const id = (typeof contentLink == "string" ? contentLink : contentLink.id);
        this.episerver.getContent<any>(id)
          .subscribe(
            (result: any) => {
              let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
                BlockFactory.getBlockComponent(result.contentType[1])
              );

              let viewContainerRef = host.viewContainerRef;
              viewContainerRef.clear();

              let componentRef = viewContainerRef.createComponent(componentFactory);
              (<BlockComponent>componentRef.instance).model = result;
            },
            e => console.error(e)
          );
      });
    });
  }


}
