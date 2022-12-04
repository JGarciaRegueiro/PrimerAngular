import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from'@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  id : number
  titulo : string 
  compania: string
  imagen: string 
  valoracionMedia: number

  constructor(private route:ActivatedRoute, private location:Location){
    
    this.id=route.snapshot.params["id"];
    this.titulo=route.snapshot.params["titulo"];
    this.compania=route.snapshot.params["compania"];
    this.imagen=route.snapshot.params["imagen"];
    this.valoracionMedia=route.snapshot.params["valoracionMedia"];
    
  }
  
  goBack():void{
    this.location.back();
  }

  ngOnInit() {
  }

}
