import { ProductoComponent } from './producto/producto.component';
import { IngresaComponent } from './ingresa/ingresa.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ModaComponent } from './moda/moda.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HeaderofertasComponent } from './headerofertas/headerofertas.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{path:'ofertas', component: HeaderofertasComponent},
{path:'', component: HomeComponent},
{path:'supermercado', component: SupermercadoComponent},
{path:'moda', component: ModaComponent},
{path:'crear-cuenta', component: CrearCuentaComponent},
{path:'ingresa', component: IngresaComponent},
{path:'producto', component: ProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
