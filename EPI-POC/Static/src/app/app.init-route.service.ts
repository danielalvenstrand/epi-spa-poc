import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** InitRouteService navigates to the provided route from Episerver. */
@Injectable({
  providedIn: 'root'
})
export class InitRouteService {

  /**
   * Injects the Angular router in order to navigate on init.
   * @param router The Angular router.
   */
  constructor(private router: Router) { }

  /**
   * Takes the provided route from Episerver stored in window
   * and navigates to that URI.
   */
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
