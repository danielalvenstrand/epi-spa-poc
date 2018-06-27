import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { BLOCK_VIEW_PATH } from './block/block-view.component';

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
    const cRoute: string = window['CustomRoute'];
    let route = '/';
    if (cRoute) {
      console.log(cRoute)
      let routeArray = cRoute.split('/');
      if (cRoute.includes(BLOCK_VIEW_PATH)) {
        routeArray = routeArray.filter((val, index) => [0, routeArray.length - 1].indexOf(index) === -1);
      } else {
        routeArray = routeArray.filter((val, index) => [0, 1, routeArray.length - 1].indexOf(index) === -1);
      }
      route = routeArray.join('/');
    }
    this.router.navigateByUrl(route);

  }
}
