import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageblockComponent } from './imageblock/imageblock.component';
import { TestblockComponent } from './testblock/testblock.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageblockComponent,
    TestblockComponent
  ],
  declarations: [
    ImageblockComponent,
    TestblockComponent
  ],
  entryComponents: [
    ImageblockComponent,
    TestblockComponent
  ]
})
export class BlocksModule { }
