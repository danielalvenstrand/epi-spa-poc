import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from './root-container/root-container.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    RootContainerComponent,
    HeaderComponent
  ],
  entryComponents: [
    RootContainerComponent
  ]
})
export class CoreModule { }
