import { Component, Input } from '@angular/core';
import { InitRouteService } from './app.init-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(initRoute: InitRouteService) {
    initRoute.init();
  }

    ngOnInit() {
      console.log("app loaded")
     
    }
}
