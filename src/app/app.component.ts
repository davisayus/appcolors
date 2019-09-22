import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { md_colores } from './Colores/colores';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public seleccionado: boolean;
  public color: md_colores;
  public title = 'Colores';

  constructor(){
    
  }

  ngOnInit(){
    //Inicia estado en falso para visualizar componente
    this.seleccionado=false;

  }

  click_seleccion(color:md_colores){
    //Viene del evento del componente de colores cuando se selecciona un color 
    this.seleccionado=true;
    this.color = color;
    
    //Copia al portapapeles
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'color: ' + color.color + ' nombre: ' + color.name;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  unselected(){
    //Cambia el estado para volver al componente de colores
    this.seleccionado=false;
  }

}
