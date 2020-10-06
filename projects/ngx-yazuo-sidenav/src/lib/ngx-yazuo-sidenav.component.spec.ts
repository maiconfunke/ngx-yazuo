import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxYazuoSidenavComponent } from './ngx-yazuo-sidenav.component';

describe('NgxYazuoSidenavComponent', () => {
  let component: NgxYazuoSidenavComponent;
  let fixture: ComponentFixture<NgxYazuoSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxYazuoSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxYazuoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
