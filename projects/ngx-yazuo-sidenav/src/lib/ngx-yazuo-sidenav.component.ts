import { Component, ElementRef, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavSettings } from './model/yazuo-sidenav.interface';

@Component({
  selector: 'ngx-yazuo-sidenav',
  templateUrl: 'ngx-yazuo-sidenav.component.html',
  styleUrls: ['ngx-yazuo-sidenav.component.scss']
})
export class NgxYazuoSidenavComponent implements OnInit {

  @ViewChild('mySidenav', {static: true}) sideNav: ElementRef<any>;
  constructor(@Inject('settings') private settings: YazuoSidenavSettings) { }

  content: TemplateRef<any>;

  ngOnInit(): void {}

  openNav(content) {
    this.content = content;
    this.sideNav.nativeElement.style.width = "100%";
  }

  closeNav() {
    this.sideNav.nativeElement.style.width = "0";
  }

}
