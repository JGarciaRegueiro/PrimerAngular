import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[]= []
  videojuego : Videojuego | null = null 


  //Habilitar y deshabilitar botones
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true

  //Habilitar y deshabilitar mensajes de error
  //El usuario y la contraseña no pueden estar vacíos
  usuarioObligatorioOculto = true
  contraseñaObligatoriaOculta = true

  //Datos que recogemos del formulario
  constructor(){
      let videojuego : Videojuego = new Videojuego("Plantas vs Zombies","PopCap Games","url_imagen", 7.4)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego("Mario kart","Nintendo","url_imagen", 8.5)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego("Donkey Kong","Nintendo","url_imagen", 8.3)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego("Angry Birds","Roviio Entertainment Corporation","url_imagen", 7.2)
      this.listaVideojuegos.push(videojuego)
  }
  ngOnInit(){
  }

}

