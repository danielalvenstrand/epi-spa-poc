import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { TestpageComponent } from './pages/testpage/testpage.component';
import { InitRoute } from './shared/episerver';

/**
 * Every route has to have the same URI as the page in Episerver.
 * Each route also has to have the page id from Episerver.
 */
const routes: Routes = [
  { path: 'test', component: TestpageComponent, data: { id: 117 } }
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
