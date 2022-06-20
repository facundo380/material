import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {



  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


   Mostrar(datos:string){
    alert("Aca deberia mostrar LOS DATOS A ENVIAR...." + datos);
    this.dialog.open(DialogComponent);
   } 
}




