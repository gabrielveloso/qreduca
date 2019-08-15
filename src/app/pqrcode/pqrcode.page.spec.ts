import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PQRCodePage } from './pqrcode.page';

describe('PQRCodePage', () => {
  let component: PQRCodePage;
  let fixture: ComponentFixture<PQRCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PQRCodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PQRCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
