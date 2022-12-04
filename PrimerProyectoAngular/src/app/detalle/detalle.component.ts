import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';
import {Location} from'@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  /**@Input() videojuego:Videojuego;
  */
 constructor(private route:ActivatedRoute, private location:Location){

 }

 goBack():void{
  this.location.back();
 }
  ngOnInit(): void {
  }

}
