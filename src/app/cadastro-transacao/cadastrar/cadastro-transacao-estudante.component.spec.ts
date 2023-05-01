import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTransacaoEstudanteComponent } from './cadastro-transacao-estudante.component';

describe('CadastroEstudanteComponent', () => {
  let component: CadastroTransacaoEstudanteComponent;
  let fixture: ComponentFixture<CadastroTransacaoEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTransacaoEstudanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTransacaoEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
