import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/** InitRoute navigates to the provided route from Episerver. */
export abstract class InitRoute {

  /**
   * Injects the Angular router in order to navigate on init.
   * @param router The Angular router.
   */
  constructor(private router: Router) {
    this.init();
  }

  /**
   * Takes the provided route from Episerver stored in window
   * and navigates to that URI.
   */
  init(): void {
    console.log(window['CustomRoute'])
    const cRoute: string = window['CustomRoute'];
    if (cRoute) {
      let routeArray = cRoute.split('/');
      routeArray = routeArray.filter((val, index) => [0, 1, routeArray.length - 1].indexOf(index) === -1);
      const route = routeArray.join('/');
      console.log(route, routeArray);
      this.router.navigateByUrl(route);
    }
  }
}
