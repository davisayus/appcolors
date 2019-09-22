import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoresComponent } from './Colores/colores.component';
import { ColorComponent } from './Color/color.component';
import { CopiaComponent } from './Copia/copia.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
 // {path:'', component:AppComponent},
  {path:'colores', component:ColoresComponent},
  {path:'color', component:ColorComponent},
  {path:'copia', component:CopiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
