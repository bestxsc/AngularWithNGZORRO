import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MettingPageContentComponent } from './metting-page-content.component';

describe('MettingPageContentComponent', () => {
  let component: MettingPageContentComponent;
  let fixture: ComponentFixture<MettingPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MettingPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MettingPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
