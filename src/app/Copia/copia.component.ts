import { Component, Input, OnInit } from '@angular/core';
import { md_colores } from '../Colores/colores';

@Component({
    selector:'copia',
    templateUrl:'./copia.component.html',
    styleUrls:['./copia.component.css']
})

export class CopiaComponent{
    //Parametro que recibes del html
    @Input() color: md_colores;
    
    constructor(){

    }

    ngOnInit(){

    }

}

