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

  ngOnInit(): void {}

  openNav(content: TemplateRef<any>, settings: YazuoSidenavSettings): void {
    this.settings = settings;
    this.content = content;
    this.isShow = true;
    if(this.settings.backdrop) {
      this.document.body.style.backgroundColor = this.settings.bgBackDrop;
    }
  }

  closeNav() {
    this.isShow = false;
    if(this.settings.backdrop) {
      this.document.body.style.backgroundColor = 'white';
    }
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
}
