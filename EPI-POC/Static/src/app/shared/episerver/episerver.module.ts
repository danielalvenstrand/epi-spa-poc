import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockModule } from './block/block.module';
import { EpiserverService } from './services/episerver.service';

@NgModule({
  imports: [
    CommonModule,
    BlockModule
  ],
  exports: [
    BlockModule
  ],
  providers: [
    EpiserverService
  ]
})
export class EpiserverModule { }
