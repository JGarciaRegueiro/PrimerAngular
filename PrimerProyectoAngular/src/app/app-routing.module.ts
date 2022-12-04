import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [
  {path : '', component: VideojuegosComponent},
  {path : 'acercaDe', component : AcercaDeComponent},
  {path : 'contacto', component : ContactoComponent},
  {path : 'videojuegos', component : VideojuegosComponent},
  {path : 'detalle/:id/:titulo/:compania/:imagen/:valoracionMedia', component : DetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
