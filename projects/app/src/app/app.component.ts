import { Component, TemplateRef, ViewChild } from '@angular/core';
import { YazuoSidenavDirection} from 'projects/ngx-yazuo-sidenav/src/lib/enums/yazuo-sidenav-direction.enum';
import { NgxYazuoSidenavService } from 'projects/ngx-yazuo-sidenav/src/lib/ngx-yazuo-sidenav.service';

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
