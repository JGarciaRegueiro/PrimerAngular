import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from'@angular/common';
import { Videojuego } from '../entidades/videojuego';
import { VideojuegosComponent } from '../videojuegos/videojuegos.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
@Input() videojuego : Videojuego;

constructor(private route:ActivatedRoute, private location:Location){
  
}

goBack():void{
  this.location.back();
}
ngOnInit() {
}

}
