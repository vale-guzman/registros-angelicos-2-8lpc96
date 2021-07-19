import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rayo-cosmico',
  templateUrl: './rayo-cosmico.component.html',
  styleUrls: ['./rayo-cosmico.component.css']
})
export class RayoCosmicoComponent implements OnInit {
  datepicker:Date;
  constructor() { }

  ngOnInit() {
  }
  DiaDeLaSemana(){
    let dia:string="";
    let mi_fecha = new Date(this.datepicker).getUTCDay();
    switch(mi_fecha){
      case 0: dia="Domingo";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 1: dia="Lunes";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 2: dia="Martes";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 3: dia="Miércoles";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 4: dia="Jueves";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 5: dia="Viernes";
      document.getElementById("labelDia").innerHTML = dia;
      break;
      case 6: dia="Sábado";
      document.getElementById("labelDia").innerHTML = dia;
      break;

    };

    
    // console.log(`${mi_fecha.getDate()}-${mi_fecha.getMonth() + 1}-${mi_fecha.getFullYear()}` )
   
    // alert("Naciste un día:" + " "+ dia )
  }
}