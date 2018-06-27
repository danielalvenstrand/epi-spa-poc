import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StartpageComponent } from "./startpage.component";


const routes: Routes = [
  { path: "", pathMatch: 'full', component: StartpageComponent, data: { id: 5 } }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class StartpageRoutingModule { }
