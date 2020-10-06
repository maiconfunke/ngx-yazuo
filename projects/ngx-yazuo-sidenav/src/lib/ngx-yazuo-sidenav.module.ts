import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { YazuoSidenavSettings } from './model/yazuo-sidenav.interface';
import { NgxYazuoSidenavComponent } from './ngx-yazuo-sidenav.component';



@NgModule({
  declarations: [NgxYazuoSidenavComponent],
  exports:[NgxYazuoSidenavComponent],
  imports: [
    CommonModule
  ],
})

export class NgxYazuoSidenavModule {
  static forRoot(settings?: YazuoSidenavSettings): ModuleWithProviders<NgxYazuoSidenavModule> {
    return {
      ngModule: NgxYazuoSidenavModule,
      providers: [NgxYazuoSidenavModule, { provide: 'settings', useValue: settings }]
    };
  }
}
