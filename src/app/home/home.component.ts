import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Estudante } from '../model/Estudante';
import { EstudanteServiceService } from '../service/estudante-service.service';
import { DialogDeleteComponent } from '../shared/dialog-delete/dialog-delete.component';
import { DialogComponent } from '../shared/dialog/dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(
    private estudanteService: EstudanteServiceService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {

  }


}
