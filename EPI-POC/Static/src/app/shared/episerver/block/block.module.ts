import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective } from './block.directive';
import { BlockComponent } from './block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlockDirective
  ],
  declarations: [
    BlockDirective
  ]
})
export class BlockModule { }
