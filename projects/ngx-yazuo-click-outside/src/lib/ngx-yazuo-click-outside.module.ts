import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxYazuoClickOutsideDirective } from './ngx-yazuo-click-outside.directive';


@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [NgxYazuoClickOutsideDirective],
    exports: [NgxYazuoClickOutsideDirective]
  })
export class NgxYazuoClickOutsideModule { }
