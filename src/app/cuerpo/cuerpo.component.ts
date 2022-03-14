import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
show:boolean=true;
fondo:string='bg-white text-dark';
animales:Array<any>=[
  {animal:'perro',nombre:'firulais',edad:2},
  {animal:'gato',nombre:'tom',edad:4},
  {animal:'pato',nombre:'Donald',edad:6},
  {animal:'pato',nombre:'LUCASS',edad:6},
  {animal:'pato', nombre:'Donald', edad:8},
];
}
