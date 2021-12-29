import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QrlistComponent } from './qrlist/qrlist.component';
import { QrcreatorComponent } from './qrcreator/qrcreator.component';

@NgModule({
  declarations: [
    AppComponent,
    QrlistComponent,
    QrcreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
