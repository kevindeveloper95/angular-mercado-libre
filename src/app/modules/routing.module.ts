import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SupermercadoComponent } from '../supermercado/supermercado.component';
import { ModaComponent } from '../moda/moda.component';
import { CrearCuentaComponent } from '../crear-cuenta/crear-cuenta.component';
import { IngresaComponent } from '../ingresa/ingresa.component';
import { ProductoComponent } from '../producto/producto.component';
import { VenderComponent } from '../vender/vender.component';
import { HistorialComponent } from '../historial/historial.component';
import { MisComprasComponent } from '../mis-compras/mis-compras.component';
import { LaptopHpComponent } from '../all-products/computadoras/laptop-hp/laptop-hp.component';
import { TenisJordanComponent } from '../all-products/calzado/tenis-jordan/tenis-jordan.component';
import { PlayeraComponent } from '../all-products/ropa/playera/playera.component';
import { AudifonosXiaomiRedmiComponent } from '../all-products/tecnologia/audifonos-xiaomi-redmi/audifonos-xiaomi-redmi.component';
import { HeaderofertasComponent } from '../headerofertas/headerofertas.component';




const routes: Routes = [
  
  
  {path:'ofertas', component: HeaderofertasComponent},
  {path:'', component: HomeComponent},
  {path:'supermercado', component: SupermercadoComponent},
  {path:'moda', component: ModaComponent},
  {path:'crear-cuenta', component: CrearCuentaComponent},
  {path:'ingresa', component: IngresaComponent},
  {path:'producto', component: ProductoComponent},
  {path:'vender', component: VenderComponent},
  {path:'historial', component: HistorialComponent},
  {path:'mis-compras', component: MisComprasComponent},
  {path:'laptop', component: LaptopHpComponent},
  {path:'tenis-jordan', component: TenisJordanComponent},
  {path:'playera-polo', component: PlayeraComponent},
  {path:'audifonos-xiaomi', component: AudifonosXiaomiRedmiComponent},
  
  
  
  
  
  
  ];
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class RoutingModule { }
