import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxYazuoSidenavComponent } from './ngx-yazuo-sidenav.component';
import { NgxYazuoClickOutsideModule } from 'ngx-yazuo-click-outside';



@NgModule({
  declarations: [NgxYazuoSidenavComponent],
  exports:[NgxYazuoSidenavComponent],
  imports: [
    CommonModule,
    NgxYazuoClickOutsideModule
  ],
})

export class NgxYazuoSidenavModule {
  static forRoot(): ModuleWithProviders<NgxYazuoSidenavModule> {
    return {
      ngModule: NgxYazuoSidenavModule,
      providers: [NgxYazuoSidenavModule]
    };
  }
}
