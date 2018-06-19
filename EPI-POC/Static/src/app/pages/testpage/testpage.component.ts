import { Component, OnInit, NgZone, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';
import { Testpage } from './testpage';
import { EpiserverService } from '../../shared/services/episerver.service';
import { BlockDirective } from '../../blocks/block.directive';
import { BlockFactory } from '../../blocks/block.factory';
import { BlockComponent } from '../../blocks/block.component';
import { BlockArea } from '../../blocks/block-area';
import { PageComponent } from '../page.component';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent extends PageComponent<Testpage> {

  @ViewChildren(BlockDirective) blockArea: QueryList<BlockDirective>;

  constructor(
    route: ActivatedRoute,
    componentFactoryResolver: ComponentFactoryResolver,
    zone: NgZone,
    episerver: EpiserverService
  ) {
    super(route, componentFactoryResolver, zone, episerver);
  }

}
