## NgxYazuoSidenav

## Installation

`nnpm install --save ngx-yazuo-sidenav`

## Usage

### Module:

Import `gxYazuoSidenavModule` from `ngx-yazuo-sidenav`

```javascript
import { NgxYazuoSidenavModule } from 'ngx-yazuo-sidenav';

@NgModule({
  imports: [ NgxYazuoSidenavModule.forRoot() ]
})
```

### Component

1. Markup

```html
<button (click)="showSideNav()">Show Sidenav</button>

<ng-template #content>
   <h1>HELLO WORD!</h1>
</ng-template>
```

2. Component method

```javascript
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavSetting, NgxYazuoSidenavService, YazuoSidenavDirection } from 'ngx-yazuo-sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('content', {static: true}) content: TemplateRef<any>;

  constructor(private yazuoSidenav: NgxYazuoSidenavService) {}

  settings: YazuoSidenavSettings = {
    bgColor:'#eeeeee', //default: '#eeeeee'
    width: 100, //default: 75
    animationTime: 1, //default: 0.5s
    position: YazuoSidenavDirection.Right, //default: YazuoSidenavDirection.Left
    bgBackDrop: 'rgba(0,0,0,0.2)', //default: rgba(0,0,0,0.2)
    backdrop: true //default: false
  };

  showSideNav(): void {
    this.yazuoSidenav.open(this.content, settings); //settings is optional
  }

  closeSideNav(): void {
    this.yazuoSidenav.close()
  }
}
```

## YazuoSidenav options
```javascript
export interface YazuoSidenavSettings {
  bgColor?: string; //color background sidenav
  animationTime?: number; //duration for animation on close
  width?: number; //width of sidenav component
  position?: YazuoSidenavDirection; //position start sidenav: left ou right
  backdrop?: boolean; //show backdrop
  bgBackDrop?: string; //color for backdrop
}
```