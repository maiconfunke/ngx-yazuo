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

@Injectable({
  providedIn: 'root'
})
export class NgxYazuoSidenavService {

  componentRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  init() {
    this.componentRef = this._getElementRef();
    this._appendToContainer(this.componentRef);
  }
  open(content) {
    this.componentRef.instance.openNav(content);
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

    const dropdown = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.document.getElementsByTagName('body')[0].appendChild(dropdown);
  }

}