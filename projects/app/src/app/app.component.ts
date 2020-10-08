import { Component, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavDirection, NgxYazuoSidenavService  } from 'ngx-yazuo-sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('content', {static: true}) content: TemplateRef<any>;

  constructor(private service: NgxYazuoSidenavService) {}
  showSideNav() {
    this.service.open(this.content, {
      bgColor: '#eeeeee',
      position: YazuoSidenavDirection.Right
    });
    // setTimeout(()=>{ this.service.close()}, 2000)
  }

}
