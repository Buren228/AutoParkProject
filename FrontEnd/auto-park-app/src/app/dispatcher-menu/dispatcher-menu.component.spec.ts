import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispetcherMenuComponent } from './dispetcher-menu.component';

describe('DispetcherMenuComponent', () => {
  let component: DispetcherMenuComponent;
  let fixture: ComponentFixture<DispetcherMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispetcherMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispetcherMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
