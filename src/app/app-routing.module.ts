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
import { VenderComponent } from './vender/vender.component';
import { HistorialComponent } from './historial/historial.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { LaptopHpComponent } from './all-products/computadoras/laptop-hp/laptop-hp.component';
import { TenisJordanComponent } from './all-products/calzado/tenis-jordan/tenis-jordan.component';
import { PlayeraComponent } from './all-products/ropa/playera/playera.component';
import { AudifonosXiaomiRedmiComponent } from './all-products/tecnologia/audifonos-xiaomi-redmi/audifonos-xiaomi-redmi.component';
import { ChelseaBootsGamuzaNegroComponent } from './all-products/calzado/chelsea-boots-gamuza-negro/chelsea-boots-gamuza-negro.component';
import { DiscoDuroComponent } from './all-products/tecnologia/disco-duro/disco-duro.component';
import { PantallaTvComponent } from './all-products/tecnologia/pantalla-tv/pantalla-tv.component';
import { PlanchaComponent } from './all-products/electrodomesticos/plancha/plancha.component';
import { CajaHerramientasComponent } from './all-products/herramientas/caja-herramientas/caja-herramientas.component';
import { MouseComponent } from './all-products/tecnologia/mouse/mouse.component';
import { AudifonosGamerComponent } from './all-products/tecnologia/audifonos-gamer/audifonos-gamer.component';
import { VentiladorComponent } from './all-products/tecnologia/ventilador/ventilador.component';
import { XboxSeriesXComponent } from './all-products/tecnologia/xbox-series-x/xbox-series-x.component';
import { MazoComponent } from './all-products/herramientas/mazo/mazo.component';
import { ArenaGatoComponent } from './all-products/mascotas/arena-gato/arena-gato.component';
import { VentiladorPcComponent } from './all-products/tecnologia/ventilador-pc/ventilador-pc.component';
import { GuitarraElectricaComponent } from './all-products/entretenimiento/guitarra-electrica/guitarra-electrica.component';
import { BocinaComponent } from './all-products/tecnologia/bocina/bocina.component';
import { ChamarraComponent } from './all-products/ropa/chamarra/chamarra.component';
import { PerfumeComponent } from './all-products/salud-belleza/perfume/perfume.component';
import { PcGamerComponent } from './all-products/computadoras/pc-gamer/pc-gamer.component';
import { TaladroComponent } from './all-products/herramientas/taladro/taladro.component';




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
{path:'chelsea-boots-gamuza-negro', component: ChelseaBootsGamuzaNegroComponent},
{path:'disco-duro', component: DiscoDuroComponent},
{path:'pantalla-tv', component: PantallaTvComponent},
{path:'plancha', component: PlanchaComponent},
{path:'caja-herramientas', component: CajaHerramientasComponent},
{path:'mouse', component: MouseComponent},
{path:'audifonos-gamer', component: AudifonosGamerComponent},
{path:'ventilador', component: VentiladorComponent},
{path:'xbox-series-x', component: XboxSeriesXComponent},
{path:'mazo', component: MazoComponent},
{path:'arena-gato', component: ArenaGatoComponent},
{path:'ventilador-pc', component: VentiladorPcComponent},
{path:'guitarra-electrica', component: GuitarraElectricaComponent},
{path:'bocina', component: BocinaComponent},
{path:'chamarra', component: ChamarraComponent},
{path:'perfume', component: PerfumeComponent},
{path:'pc-gamer', component: PcGamerComponent},
{path:'taladro', component: TaladroComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
