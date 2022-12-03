import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

const routes: Routes = [
  {path : '', component: VideojuegosComponent},
  {path : 'acercaDe', component : AcercaDeComponent},
  {path : 'contacto', component : ContactoComponent},
  {path : 'videojuegos', component : VideojuegosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
