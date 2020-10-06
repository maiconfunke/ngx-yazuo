import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgxYazuoSidenavService } from '../../../ngx-yazuo-sidenav/src/lib/ngx-yazuo-sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('content', {static: true}) content: TemplateRef<any>;

  constructor(private service: NgxYazuoSidenavService) {
    this.service.init();
  }
  showSideNav() {
    this.service.open(this.content);
    setTimeout(()=>{ this.service.close()}, 2000)
  }

}
