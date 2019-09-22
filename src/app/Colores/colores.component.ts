import { Component, Output, EventEmitter } from '@angular/core';
import { CnndatosService } from '../cnnDatos/cnndatos.service';
import { md_colores } from './colores';

@Component({
    selector:'colores',
    templateUrl:'./colores.component.html',
    styleUrls:['./colores.component.css']
})

export class ColoresComponent{
    //Generador de evento para la selecciona de color
    @Output() eE_Colores = new EventEmitter();

    //Color seleccionado
    public color: md_colores;

    //Acceso a datos y arreglo de colores provenientes de la API
    public l_accesoDatos: CnndatosService;
    public l_dcolores: md_colores[]=[];

    constructor(private accesoDatos: CnndatosService){
        this.l_accesoDatos=accesoDatos;
    }
    
    
    ngOnInit(){
        //Realiza consumo de la API
        this.l_accesoDatos.getColores()
        .subscribe(
            (data) => {this.l_dcolores = data['data'];
        },
        (error) => { 
            console.error(error)
        });

    }
  
    div_card_click(color:md_colores){
        //Evento click al seleccionar un color
        this.color = color;

        this.eE_Colores.emit(this.color);
    }
  
}