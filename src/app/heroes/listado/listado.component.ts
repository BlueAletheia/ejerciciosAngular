import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
    'BlackWidow',
    'HawkEye',
  ];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

/*  constructor() {

    //se lanza antes que el oninit
    console.log('constructor');
  }

  ngOnInit(): void {

    //se utiliza para inicializar cosas y servicios
    console.log('noOnInit');
  }
}
*/
