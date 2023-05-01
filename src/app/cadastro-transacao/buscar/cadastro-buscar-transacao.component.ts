import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Estudante } from '../../model/Estudante';
import { EstudanteServiceService } from '../../service/estudante-service.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-buscar-estudante',
  templateUrl: './cadastro-buscar-transacao.component.html',
  styleUrls: ['./cadastro-buscar-transacao.component.css']
})
export class CadastroBuscarEstudanteComponent implements OnInit {
  estudante! : Estudante;
  estudantes : Estudante[] = [];
  formBuscarEstudante!: FormGroup;



  constructor(
    private estudanteService: EstudanteServiceService,
    private _router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): any {
    this.formBuscarEstudante = this.fb.group({
      nomeBuscar: ['', [Validators.required]]
    })
  }

  buscarEstudante(): void {
    const { valid, value } = this.formBuscarEstudante;
    if (valid) {



      this.estudanteService.findStudents(value.nomeBuscar).subscribe(next => {
        this.estudantes.push(next);
      });






    }
  }

  cadastrarTransacao(id? : any): void {
    console.log(id);

    this._router.navigate(['/cadastro-transacao/'+id])







  }

  voltar(): void {
    history.go(-1);
  }

}
