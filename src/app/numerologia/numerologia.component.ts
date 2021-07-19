
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { window } from 'rxjs/operators';
import { Meses, Numeros } from '../numeros';
import { NumerosService } from '../numeros.service';

@Component({
  selector: 'app-numerologia',
  templateUrl: './numerologia.component.html',
  styleUrls: ['./numerologia.component.css']
})
export class NumerologiaComponent implements OnInit {

  FormRegistro: FormGroup;
  comboMes: Numeros[]= Meses;
  diaNac:number;
  selectedMes:number;
  yearNac:number;

  
 constructor( ) { }

//  public formBuilder: FormBuilder, private modeloMes : Numeros

  ngOnInit() {  }

  CalcularNumeroTotal() {
    var a = this.diaNac + this.yearNac + this.selectedMes;

    var total = a.toString().split('').reduce(function (r, n) { return r + parseInt(n) }, 0);

    if (total >= 10) {
      var total2 = total.toString().split('').reduce(function (r, n) { return r + parseInt(n) }, 0);
      alert("El N° Total es:" + "  " + total2)
    }
    else { alert("El N° Total es:" + "  " + total) }


    // alert("El N° de TRÁNSITO es:" + "  " + total)
    // this.diaNac = null;
    // this.selectedMes = 1;
    this.yearNac = null;
  }

}