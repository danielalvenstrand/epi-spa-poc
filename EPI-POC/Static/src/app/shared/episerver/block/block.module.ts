import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective } from './block.directive';
import { BlockComponent } from './block.component';
import { BlockViewComponent } from './block-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BlockDirective,
    BlockViewComponent
  ],
  declarations: [
    BlockDirective,
    BlockViewComponent
  ],
  entryComponents: [
    BlockViewComponent
  ]
})
export class BlockModule { }
