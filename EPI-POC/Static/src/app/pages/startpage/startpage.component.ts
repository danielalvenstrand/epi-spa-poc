import { Component, OnInit, ComponentFactoryResolver, NgZone } from '@angular/core';
import { PageComponent, EpiserverService } from '../../shared/episerver';
import { Startpage } from './startpage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent extends PageComponent<Startpage> {

  constructor(
    route: ActivatedRoute,
    componentFactoryResolver: ComponentFactoryResolver,
    zone: NgZone,
    episerver: EpiserverService
  ) {
    super(route, componentFactoryResolver, zone, episerver);
  }

}
