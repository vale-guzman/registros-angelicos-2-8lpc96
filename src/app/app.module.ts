import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { NumerologiaComponent } from './numerologia/numerologia.component';
import { RouterModule } from '@angular/router';
import { AngelesRegentesComponent } from './angeles-regentes/angeles-regentes.component';
import { NumerosService } from './numeros.service';
import { TutelarComponent } from './tutelar/tutelar.component';
import { PlanetarioComponent } from './planetario/planetario.component';
import { ZodiacalComponent } from './zodiacal/zodiacal.component';
import { RayoCosmicoComponent } from './rayo-cosmico/rayo-cosmico.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'numerologia', component: NumerologiaComponent },
      { path: 'angeles-regentes', component: AngelesRegentesComponent },
      { path: 'tutelar', component: TutelarComponent },
      { path: 'planetario', component: PlanetarioComponent },
      { path: 'zodiacal', component: ZodiacalComponent },
      { path: 'rayo-cosmico', component: RayoCosmicoComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, InicioComponent, NumerologiaComponent, AngelesRegentesComponent, TutelarComponent, PlanetarioComponent, ZodiacalComponent, RayoCosmicoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NumerosService]
})
export class AppModule { }
