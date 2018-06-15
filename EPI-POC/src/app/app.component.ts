import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(router: Router) {
    const cRoute: string = Window['CustomRoute'];
    if (cRoute) {
      let  routeArray = cRoute.split('/');
      routeArray = routeArray.filter((val, index) => [0, 1, routeArray.length - 1].indexOf(index) === -1);
      const route = routeArray.join('/');
      console.log(route, routeArray);
      router.navigateByUrl(route);
    }
  }

    ngOnInit() {
      console.log("app loaded")
     
    }

  href() {
    return window.location.href;
  }
}
