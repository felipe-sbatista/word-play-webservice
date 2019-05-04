import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPalavraComponent } from './cadastrar-palavra.component';

describe('CadastrarPalavraComponent', () => {
  let component: CadastrarPalavraComponent;
  let fixture: ComponentFixture<CadastrarPalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
