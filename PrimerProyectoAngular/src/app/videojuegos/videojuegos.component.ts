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

  id : number = 0
  titulo : string = ""
  compania: string = ""
  imagen: string = ""
  valoracionMedia: number = 0;

  //Habilitar y deshabilitar botones
  insertarDeshabilitado = false
  modificarBorrarDeshabilitado = true

  //Habilitar y deshabilitar mensajes de error
  //El usuario y la contraseña no pueden estar vacíos
  usuarioObligatorioOculto = true
  contraseñaObligatoriaOculta = true

  //Datos que recogemos del formulario
  constructor(){
      let videojuego : Videojuego = new Videojuego(1,"Plantas vs Zombies","PopCap Games","url_imagen", 7.4)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego(2,"Mario kart","Nintendo","url_imagen", 8.5)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego(3,"Donkey Kong","Nintendo","url_imagen", 8.3)
      this.listaVideojuegos.push(videojuego)
      videojuego = new Videojuego(4,"Angry Birds","Roviio Entertainment Corporation","PrimerProyectoAngular\src\assets\img\angrybirds.jpeg", 7.2)
      this.listaVideojuegos.push(videojuego)
      
  }

  public seleccionar (videojuego : Videojuego) : void{
   /**  console.log("Seleccionando...")
    
    this.id=videojuego.id
    this.titulo= videojuego.titulo
    this.compania=videojuego.compania
    this.imagen = videojuego.imagen
    this.valoracionMedia=videojuego.valoracionMedia
    */
   this.videojuego=videojuego;
  }

  ngOnInit(){
  }

}

