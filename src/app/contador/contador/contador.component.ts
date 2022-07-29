import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <span>{{ numero }}</span>
    <hr />
    <button (click)="acumular(-base)">- {{ base }}</button>
    <button (click)="acumular(base)">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 0;
  /*
    sumar() {
        this.numero += 1;
    }

    restar() {
        this.numero -= 1;
    }
    */

  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
