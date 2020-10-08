import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  ApplicationRef,
  TemplateRef, EmbeddedViewRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { NgxYazuoSidenavComponent } from './ngx-yazuo-sidenav.component';
import { YazuoSidenavSettings } from './model/yazuo-sidenav.interface';
import { YazuoSidenavDirection } from './enums/yazuo-sidenav-direction.enum';

@Injectable({
  providedIn: 'root'
})
export class NgxYazuoSidenavService {

  componentRef;
  defaultSettings: YazuoSidenavSettings = {
    bgColor:'#eeeeee',
    width: 75,
    animationTime: 0.5,
    position: YazuoSidenavDirection.Left,
    bgBackDrop: 'rgba(0,0,0,0.4)',
    backdrop: false
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: any
  ) {
    this.componentRef = this._getElementRef();
    this._appendToContainer(this.componentRef);
  }

  open(content: TemplateRef<any>, settings?: YazuoSidenavSettings) {
    this.defaultSettings = settings ? {...this.defaultSettings, ...settings} : this.defaultSettings;
    this.componentRef.instance.openNav(content, this.defaultSettings);
  }

  close() {
    this.componentRef.instance.closeNav();
  }

  private _getElementRef() {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(NgxYazuoSidenavComponent)
      .create(this.injector);

    return componentRef;
  }

  private _appendToContainer(componentRef) {
    this.appRef.attachView(componentRef.hostView);
    const yazuoSidenav = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.document.body.appendChild(yazuoSidenav);
  }

}