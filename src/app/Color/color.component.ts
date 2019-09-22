import { Component, Input } from '@angular/core';
import { md_colores } from '../Colores/colores';

@Component({
    selector:'color',
    templateUrl:'./color.component.html',
    styleUrls:['./color.component.css']
})

export class ColorComponent{
    //Parametro del componente viene desde el html
    @Input() color:md_colores;

    constructor(){     
    }

    ngOnInit(){
    }

}