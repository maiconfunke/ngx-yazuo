import { TestBed } from '@angular/core/testing';

import { NgxYazuoSidenavService } from './ngx-yazuo-sidenav.service';

describe('NgxYazuoSidenavService', () => {
  let service: NgxYazuoSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxYazuoSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
