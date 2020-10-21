import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavDirection } from './enums/yazuo-sidenav-direction.enum';
import { YazuoSidenavSettings } from './model/yazuo-sidenav.interface';

@Component({
  selector: 'ngx-yazuo-sidenav',
  templateUrl: 'ngx-yazuo-sidenav.component.html',
  styleUrls: ['ngx-yazuo-sidenav.component.scss']
})
export class NgxYazuoSidenavComponent implements OnInit {

  @ViewChild('mySidenav', {static: true}) sideNav: ElementRef<any>;
  constructor(@Inject(DOCUMENT) private document: any) { }

  content: TemplateRef<any>;
  settings: YazuoSidenavSettings = {};
  isShow = false;
  onLoaded = false;

  ngOnInit(): void {}

  openNav(content: TemplateRef<any>, settings: YazuoSidenavSettings): void {
    this.settings = settings;
    this.content = content;
    this.isShow = true;
    setTimeout(() => {
      this.onLoaded = true
    }, this.settings.animationTime * 1000);
  }

  closeNav() {
    this.document.body.style.overflowY = 'auto';
    this.isShow = false;
    this.onLoaded = false;
  }

  get isDirectionFromRight() {
    return YazuoSidenavDirection.Right === this.settings.position;
  }

  get isDirectionFromLeft() {
    return YazuoSidenavDirection.Left === this.settings.position;
  }

  get componentWidth() {
    const cWidth = this.isShow ? this.settings.width + '%' : 0;
    return cWidth;
  }

  onClickOutside(): void {
    if(this.onLoaded && this.settings.clickOutside) {
      this.closeNav();
    }
  }
}
