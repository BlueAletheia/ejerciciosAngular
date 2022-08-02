import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';

// tarea: crear un modulo llamado contadorModule

import { HeroesModulo } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [BrowserModule, HeroesModulo, ContadorModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
