import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEstudanteComponent } from './cadastro-estudante.component';

describe('CadastroEstudanteComponent', () => {
  let component: CadastroEstudanteComponent;
  let fixture: ComponentFixture<CadastroEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEstudanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
