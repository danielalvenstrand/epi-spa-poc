import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestpageModule } from './pages/testpage/testpage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
    TestpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
