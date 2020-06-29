import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajArtykulComponent } from './dodaj-artykul.component';

describe('DodajArtykulComponent', () => {
  let component: DodajArtykulComponent;
  let fixture: ComponentFixture<DodajArtykulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajArtykulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajArtykulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
