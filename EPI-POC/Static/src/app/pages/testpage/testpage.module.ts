import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';
import { HttpClientModule } from '@angular/common/http';
import { EpiserverService } from '../../shared/services/episerver.service';
import { TestblockComponent } from '../../blocks/testblock/testblock.component';
import { BlockDirective } from '../../blocks/block.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [EpiserverService],
  declarations: [TestpageComponent, BlockDirective, TestblockComponent],
  entryComponents: [TestblockComponent]
})
export class TestpageModule { }
