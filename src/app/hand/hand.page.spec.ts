import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandPage } from './hand.page';

describe('HandPage', () => {
  let component: HandPage;
  let fixture: ComponentFixture<HandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
