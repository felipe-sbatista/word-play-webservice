import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPalavraComponent } from './listar-palavra.component';

describe('ListarPalavraComponent', () => {
  let component: ListarPalavraComponent;
  let fixture: ComponentFixture<ListarPalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
