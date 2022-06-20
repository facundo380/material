import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';








@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  resultado!: string;
  rsltadojson!: JSON;
  
  

  
  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    apellido: new FormControl('', [Validators.required,  Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required, Validators.email])
   
  });
  
  constructor() { }

  ngOnInit(): void {



  }

  submit() {
    alert(this.formularioContacto.get("nombre")?.value + " " + this.formularioContacto.get("apellido")?.value +  " " + this.formularioContacto.get("mail")?.value)
            
    if (this.formularioContacto.valid)
      this.resultado = "Todos OK"  ;
      //Aca enviaria datos a la api ..
      //this.rsltadojson=this.formularioContacto.getRawValue();    

     else
      this.resultado = "Faltan datos o hay error en los campos"  + this.formularioContacto.get("nombre")?.value ;
  }

}
