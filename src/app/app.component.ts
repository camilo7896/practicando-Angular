import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'mi primer app';
  show:boolean=true;
  red:boolean=true;
  activo:string='primero';

  animales:Array<any>=[
    {animal:'perro',nombre:'firulais',edad:2},
    {animal:'gato',nombre:'tom',edad:4},
    {animal:'pato',nombre:'Donald',edad:6},
    {animal:'pato',nombre:'LUCASS',edad:6},
    {nombre:'Donald'},
    {animal:'perro',nombre:'firulais',edad:2},
    {animal:'gato',nombre:'tom',edad:4},
    {animal:'pato',nombre:'Donald',edad:6},
    {animal:'pato',nombre:'LUCASS',edad:6},
    {nombre:'Donald'}

  ];

}
