import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from './root-container/root-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RootContainerComponent
  ],
  entryComponents: [
    RootContainerComponent
  ]
})
export class CoreModule { }
