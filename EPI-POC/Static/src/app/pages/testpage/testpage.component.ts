import { Component, OnInit, NgZone, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';
import { Testpage } from './testpage';
import { EpiserverService } from '../../shared/services/episerver.service';
import { BlockAreaDirective } from '../../blocks/block-area.directive';
import { BlockFactory } from '../../blocks/block.factory';
import { BlockComponent } from '../../blocks/block.component';
import { BlockArea } from '../../blocks/block-area';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent {

  id: number;
  model: Testpage;
  @ViewChildren(BlockAreaDirective) blockAreaHosts: QueryList<BlockAreaDirective>;

  constructor(private httpClient: HttpClient, route: ActivatedRoute, private episerver: EpiserverService, private componentFactoryResolver: ComponentFactoryResolver) {

    route.data.subscribe(
      dd => {
        this.id = dd.id;
      },
      e => console.error(e)
    );

    this.episerver.init().then(() => {
      this.episerver.contentSaved<Testpage>()
        .subscribe(updatedModel => {
          this.model = { ...this.model, ...updatedModel };
          this.loadBlocks();
        });
    });
  }

  ngAfterViewInit() {
    this.updateContent();
  }

  loadBlocks() {
    this.blockAreaHosts.toArray().forEach((host: BlockAreaDirective, index: number) => {
      const id = this.model.blockArea.value[index].contentLink.id;
      
      const headers: HttpHeaders = new HttpHeaders({
        'Accept-Language': 'en'
      });
      this.httpClient.get<any>(`http://localhost:50006/api/episerver/v1.0/content/${id}`, { headers })
        .subscribe(
          (result: any) => {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
              BlockFactory.getBlockComponent(result.contentType[1])
            );

            let viewContainerRef = host.viewContainerRef;
            viewContainerRef.clear();

            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<BlockComponent>componentRef.instance).data = result;
          },
          e => console.error(e)
        );
    }); 
  }

  updateContent(): void {
    const workid = Window['WorkID'];
    const headers: HttpHeaders = new HttpHeaders({
      'Accept-Language': 'en'
    });
    this.httpClient.get<Testpage>(`http://localhost:50006/api/episerver/v1.0/content/${this.id}${workid ? '_' + workid : ''}`, { headers })
      .subscribe(
        (result: Testpage) => {
          this.model = result;
          this.loadBlocks();
        },
        e => console.error(e)
      );
  }

}
