import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';

import { CnndatosService } from './cnnDatos/cnndatos.service';
import { ColoresComponent } from './Colores/colores.component';
import { ColorComponent } from './Color/color.component';
import { CopiaComponent } from './Copia/copia.component';


@NgModule({
  declarations: [
    AppComponent,
    ColoresComponent,
    ColorComponent,
    CopiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],  
  providers: [CnndatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
