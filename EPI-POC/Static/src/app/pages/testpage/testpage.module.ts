import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';
import { HttpClientModule } from '@angular/common/http';
import { TestblockComponent } from '../../blocks/testblock/testblock.component';
import { ImageblockComponent } from '../../blocks/imageblock/imageblock.component';
import { EpiserverModule } from '../../shared/episerver';
import { BlocksModule } from '../../blocks/blocks.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EpiserverModule,
    BlocksModule
  ],
  declarations: [TestpageComponent]
})
export class TestpageModule { }
