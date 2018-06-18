import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './pages/testpage/testpage.component';

const routes: Routes = [
  { path: 'test', component: TestpageComponent, data: { id: 117 } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
