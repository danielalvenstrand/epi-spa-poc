import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDirective } from './block.directive';
import { TestblockComponent } from './testblock/testblock.component';
import { ImageblockComponent } from './imageblock/imageblock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BlockDirective,
    TestblockComponent,
    ImageblockComponent
  ],
  declarations: [
    BlockDirective,
    TestblockComponent,

    ImageblockComponent],
  entryComponents: [
    TestblockComponent,
    ImageblockComponent
  ]
})
export class BlocksModule { }
