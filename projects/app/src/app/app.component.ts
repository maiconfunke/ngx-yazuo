import { Component, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavDirection} from 'ngx-yazuo-sidenav';
import { NgxYazuoSidenavService } from 'ngx-yazuo-sidenav';

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
      bgBackDrop: 'black',
      position: YazuoSidenavDirection.Right,
    });
    // setTimeout(()=>{ this.service.close()}, 2000)
  }

}
