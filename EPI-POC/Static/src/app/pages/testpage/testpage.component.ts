import { Component, OnInit, NgZone, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';
import { Testpage } from './testpage';
import { PageComponent, BlockDirective, EpiserverService } from '../../shared/episerver';

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
