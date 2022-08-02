import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  //  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000,
    },
    {
      nombre: 'Vegeta',
      poder: 17000,
    },
  ];
  nuevo: Personaje = {
    nombre: 'Maestro Muten',
    poder: 1000,
  };

  agregarNuevoPersonaje(argumento: Personaje) {
    this.personajes.push(argumento);
  }
}
