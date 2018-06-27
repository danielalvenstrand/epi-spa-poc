import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { InitRoute, BlockViewRoute } from './shared/episerver';
import { RootContainerComponent } from './core/root-container/root-container.component';

/**
 * Every route has to have the same URI as the page in Episerver.
 * Each route also has to have the page id from Episerver.
 */
const routes: Routes = [
  { path: '', component: RootContainerComponent, children: [
    { path: '', loadChildren: './pages/startpage/startpage.module#StartpageModule' },
    { path: 'test', loadChildren: './pages/testpage/testpage.module#TestpageModule' },
  ]},
  BlockViewRoute
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule extends InitRoute {

  /**
   * Injects the router in order to navigate to init route.
   * @param router used to navigate to provided route on app launch.
   */
  constructor(router: Router) {
    super(router);
  }
}
