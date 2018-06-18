import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InitRouteService {

  constructor(private router: Router) {
    console.log("init route", Window['CustomRoute'])
    
  }

  init(): void {
    const cRoute: string = Window['CustomRoute'];
    if (cRoute) {
      let routeArray = cRoute.split('/');
      routeArray = routeArray.filter((val, index) => [0, 1, routeArray.length - 1].indexOf(index) === -1);
      const route = routeArray.join('/');
      console.log(route, routeArray);
      this.router.navigateByUrl(route);
    }
  }
}
