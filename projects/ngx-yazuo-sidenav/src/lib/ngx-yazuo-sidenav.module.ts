import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxYazuoSidenavComponent } from './ngx-yazuo-sidenav.component';



@NgModule({
  declarations: [NgxYazuoSidenavComponent],
  exports:[NgxYazuoSidenavComponent],
  imports: [
    CommonModule
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
