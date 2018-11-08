import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MettingPageComponent } from './metting-page.component';

describe('MettingPageComponent', () => {
  let component: MettingPageComponent;
  let fixture: ComponentFixture<MettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
