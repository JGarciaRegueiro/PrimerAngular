import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    VideojuegosComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    AcercaDeComponent,
    ContactoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

