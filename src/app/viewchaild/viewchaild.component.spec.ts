import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchaildComponent } from './viewchaild.component';

describe('ViewchaildComponent', () => {
  let component: ViewchaildComponent;
  let fixture: ComponentFixture<ViewchaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
