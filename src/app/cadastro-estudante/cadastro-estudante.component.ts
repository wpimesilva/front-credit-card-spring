import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Estudante } from '../model/Estudante';
import { EstudanteServiceService } from '../service/estudante-service.service';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-cadastro-estudante',
  templateUrl: './cadastro-estudante.component.html',
  styleUrls: ['./cadastro-estudante.component.css']
})
export class CadastroEstudanteComponent implements OnInit {
  estudante! : Estudante;
  formCadastroEstudante!: FormGroup;
  fabricanteSelecionado!: any;

  constructor(
    private estudanteService: EstudanteServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): any {
    this.formCadastroEstudante = this.fb.group({
      nome: ['', [Validators.required]],
      RM: ['', [Validators.required]]
    })
  }

  create(): void {
    const { valid, value } = this.formCadastroEstudante;
    if (valid) {
      const estudante: Estudante = {
        name: value.nome,
        rm: value.RM
      } as Estudante;

      console.log(estudante)

      this.estudanteService.createStudents(estudante).subscribe(
        {
          next : (data) => {

            this.dialog.open(DialogComponent, {
              data: 'cadastro',
            });


          },
          error : (error) => {
            this.dialog.open(DialogComponent, {
              data: "Erro ao cadastrar estudante",
            });
          }

        }

      );

    }
  }

  voltar(): void {
    history.go(-1);
  }

}
