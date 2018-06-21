import { Component } from '@angular/core';
import { InitRouteService } from './app.init-route.service';

/**
 * AppComponent uses the InitRouteService to
 * navigate to the Episerver set url
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Injects the initRoute in order to navigate to provided route.
   * @param initRoute used to navigate to provided route on app launch.
   */
  constructor(initRoute: InitRouteService) {
    initRoute.init();
  }

}
