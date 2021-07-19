import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Numeros } from './numeros';

@Injectable({providedIn: "root" })
export class NumerosService {

  constructor() { }
  get() {
    return of(Numeros);
}
}





