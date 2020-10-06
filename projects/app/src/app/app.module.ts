import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxYazuoSidenavModule } from '../../../ngx-yazuo-sidenav/src/lib/ngx-yazuo-sidenav.module';
import { NgxYazuoSidenavService } from 'projects/ngx-yazuo-sidenav/src/lib/ngx-yazuo-sidenav.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYazuoSidenavModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
