import { Component } from '@angular/core';
import { Usuario } from './entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PrimerProyectoAngular';
  
  listaUsuarios : Usuario[]= []
  usuario : Usuario | null = null 

  user : string 
  pass : string 
  
  logged : boolean = false

  constructor(){
    let usuario : Usuario = new Usuario("user","pass")
    this.listaUsuarios.push(usuario)
    usuario = new Usuario("user2","pass2")
    this.listaUsuarios.push(usuario)
    usuario = new Usuario("user3","pass3")
    this.listaUsuarios.push(usuario)
  }

  public login () : boolean{
    if(this.controlAcceso()){
      this.logged=true;
      return true;
    } else {
      this.logged=false;
      return false;
    }
  }

  public controlAcceso() : boolean{
    for(let u of this.listaUsuarios){
      if (u.user==this.user && u.pass==this.pass){
        return true;
      }
    }
    return false;
  }

}


