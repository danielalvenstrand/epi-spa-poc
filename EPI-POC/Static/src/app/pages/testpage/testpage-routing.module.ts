import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestpageComponent } from "./testpage.component";


const routes: Routes = [
  { path: "", component: TestpageComponent, data: { id: 117 } }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TestpageRoutingModule { }
