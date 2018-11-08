import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDrawerComponent } from './document-drawer.component';

describe('DocumentDrawerComponent', () => {
  let component: DocumentDrawerComponent;
  let fixture: ComponentFixture<DocumentDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
