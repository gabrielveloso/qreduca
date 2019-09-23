import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItensPage } from './lista-itens.page';

describe('ListaItensPage', () => {
  let component: ListaItensPage;
  let fixture: ComponentFixture<ListaItensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaItensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
