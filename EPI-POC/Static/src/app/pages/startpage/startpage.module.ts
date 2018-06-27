import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartpageComponent } from './startpage.component';
import { StartpageRoutingModule } from './startpage-routing.module';
import { EpiserverModule } from '../../shared/episerver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StartpageRoutingModule,
    HttpClientModule,
    EpiserverModule
  ],
  declarations: [StartpageComponent]
})
export class StartpageModule { }
