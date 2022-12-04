import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from'@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
  }
  goBack():void{
    this.location.back();
  }
}
