import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';
import { HttpClientModule } from '@angular/common/http';
import { EpiserverService } from '../../shared/services/episerver.service';
import { TestblockComponent } from '../../blocks/testblock/testblock.component';
import { BlockDirective } from '../../blocks/block.directive';
import { ImageblockComponent } from '../../blocks/imageblock/imageblock.component';
import { BlocksModule } from '../../blocks/blocks.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BlocksModule
  ],
  providers: [EpiserverService],
  declarations: [TestpageComponent]
})
export class TestpageModule { }
