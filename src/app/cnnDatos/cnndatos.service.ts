import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CnndatosService {

  uri:string ='https://reqres.in/api/colors?page=2';

  constructor(private httpClient: HttpClient ) 
  {
    console.log ('EL servicio de acceso a datos esta funcionando correctamente');
  }

  getColores(){
    return this.httpClient.get(this.uri);
  }

}

