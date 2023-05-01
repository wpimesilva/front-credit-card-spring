import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Transacao } from '../../model/Transacao';
import { TransacaoServiceService } from '../../service/transacao-service.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-transacao-estudante',
  templateUrl: './cadastro-transacao-estudante.component.html',
  styleUrls: ['./cadastro-transacao-estudante.component.css']
})
export class CadastroTransacaoEstudanteComponent implements OnInit {
  transacao! : Transacao;
  formCadastroTransacao!: FormGroup;
  id : any;


  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private transactionService: TransacaoServiceService,
    private fb: FormBuilder,
    public dialog: MatDialog
    ) {


     }

    ngOnInit(): void {
      this.validation();
      this.route.params.subscribe(params => this.id = params['id']);
      console.log(this.id);
    }

    public validation(): any {
      this.formCadastroTransacao = this.fb.group({
        preco: ['', [Validators.required]]
      })
    }

    cadastrarTransacaoEstudante(): void {
      const { valid, value } = this.formCadastroTransacao;
      if (valid) {
        const transaction: Transacao = {
          studentId: this.id,
          price: value.preco
        } as Transacao;

        this.transactionService.createTransactions(transaction).subscribe(
          {
            next : () => {

              this.dialog.open(DialogComponent, {
                data: 'cadastro',
              });


            },
            error : () => {
              this.dialog.open(DialogComponent, {
                data: "Erro ao cadastrar transação",
              });
            }

          }

        );

        console.log(transaction)

        this._router.navigate(['/']);


      }
    }

    voltar(): void {
      history.go(-1);
    }

}
