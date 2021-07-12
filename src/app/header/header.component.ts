import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 

let formulario = document.querySelector('.first-input');
let mandar = document.querySelector('.submit');

let filtrar = ()=>{
  console.log(formulario);
}

mandar?.addEventListener('click', filtrar)


  }

  ngOnInit(): void {
  }

}
