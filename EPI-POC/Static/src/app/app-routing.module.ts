import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './pages/testpage/testpage.component';

const routes: Routes = [
    { path: 'test', component: TestpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
