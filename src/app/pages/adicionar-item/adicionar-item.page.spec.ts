import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarItemPage } from './adicionar-item.page';

describe('AdicionarItemPage', () => {
  let component: AdicionarItemPage;
  let fixture: ComponentFixture<AdicionarItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
