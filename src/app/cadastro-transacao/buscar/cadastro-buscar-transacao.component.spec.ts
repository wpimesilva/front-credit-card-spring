import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroBuscarEstudanteComponent } from './cadastro-buscar-transacao.component';

describe('CadastroBuscarEstudanteComponent', () => {
  let component: CadastroBuscarEstudanteComponent;
  let fixture: ComponentFixture<CadastroBuscarEstudanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroBuscarEstudanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroBuscarEstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
