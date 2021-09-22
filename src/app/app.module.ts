import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderofertasComponent } from './headerofertas/headerofertas.component';
import { HomeComponent } from './home/home.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ModaComponent } from './moda/moda.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { IngresaComponent } from './ingresa/ingresa.component';
import { ProductoComponent } from './producto/producto.component';
import { VenderComponent } from './vender/vender.component';
import { HistorialComponent } from './historial/historial.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { LaptopHpModule } from './all-products/computadoras/laptop-hp/laptop-hp.module';
import { TenisJordanModule } from './all-products/calzado/tenis-jordan/tenis-jordan.module';
import { PlayeraComponent } from './all-products/ropa/playera/playera.component';
import { AudifonosXiaomiRedmiModule } from './all-products/tecnologia/audifonos-xiaomi-redmi/audifonos-xiaomi-redmi.module';
import { PlayeraModule } from './all-products/ropa/playera/playera.module';
import { ChelseaBootsGamuzaNegroComponent } from './all-products/calzado/chelsea-boots-gamuza-negro/chelsea-boots-gamuza-negro.component';
import { ChelseaBootsGamuzaNegroModule } from './all-products/calzado/chelsea-boots-gamuza-negro/chelsea-boots-gamuza-negro.module';
import { DiscoDuroComponent } from './all-products/tecnologia/disco-duro/disco-duro.component';
import { DiscoDuroModule } from './all-products/tecnologia/disco-duro/disco-duro.module';
import { PantallaTvModule } from './all-products/tecnologia/pantalla-tv/pantalla-tv.module';
import { PlanchaComponent } from './all-products/electrodomesticos/plancha/plancha.component';
import { PlanchaModule } from './all-products/electrodomesticos/plancha/plancha.module';
import { PantallaTvComponent } from './all-products/tecnologia/pantalla-tv/pantalla-tv.component';
import { CajaHerramientasModule } from './all-products/herramientas/caja-herramientas/caja-herramientas.module';
import { MouseComponent } from './all-products/tecnologia/mouse/mouse.component';
import { MouseModule } from './all-products/tecnologia/mouse/mouse.module';
import { AudifonosGamerModule } from './all-products/tecnologia/audifonos-gamer/audifonos-gamer.module';
import { VentiladorComponent } from './all-products/tecnologia/ventilador/ventilador.component';
import { VentiladorModule } from './all-products/tecnologia/ventilador/ventilador.module';
import { XboxSeriesXModule } from './all-products/tecnologia/xbox-series-x/xbox-series-x.module';
import { MazoComponent } from './all-products/herramientas/mazo/mazo.component';
import { MazoModule } from './all-products/herramientas/mazo/mazo.module';
import { ArenaGatoModule } from './all-products/mascotas/arena-gato/arena-gato.module';
import { VentiladorPcComponent } from './all-products/tecnologia/ventilador-pc/ventilador-pc.component';
import { VentiladorPcModule } from './all-products/tecnologia/ventilador-pc/ventilador-pc.module';
import { GuitarraElectricaModule } from './all-products/entretenimiento/guitarra-electrica/guitarra-electrica.module';
import { BocinaComponent } from './all-products/tecnologia/bocina/bocina.component';
import { BocinaModule } from './all-products/tecnologia/bocina/bocina.module';
import { ChamarraModule } from './all-products/ropa/chamarra/chamarra.module';
import { PerfumeComponent } from './all-products/salud-belleza/perfume/perfume.component';
import { PerfumeModule } from './all-products/salud-belleza/perfume/perfume.module';
import { PcGamerModule } from './all-products/computadoras/pc-gamer/pc-gamer.module';
import { TaladroComponent } from './all-products/herramientas/taladro/taladro.component';
import { TaladroModule } from './all-products/herramientas/taladro/taladro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HeaderofertasComponent,
    HomeComponent,
    SupermercadoComponent,
    ModaComponent,
    CrearCuentaComponent,
    IngresaComponent,
    ProductoComponent,
    VenderComponent,
    HistorialComponent,
    MisComprasComponent,
    PlayeraComponent,
    ChelseaBootsGamuzaNegroComponent,
    DiscoDuroComponent,
    PlanchaComponent,
    MouseComponent,
    VentiladorComponent,
    MazoComponent,
    VentiladorPcComponent,
    BocinaComponent,
    PerfumeComponent,
    TaladroComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LaptopHpModule,
    TenisJordanModule,
    PlayeraModule,
    AudifonosXiaomiRedmiModule,
    ChelseaBootsGamuzaNegroModule,
    DiscoDuroModule,
    PantallaTvModule,
    PlanchaModule,
    CajaHerramientasModule,
    MouseModule,
    AudifonosGamerModule,
    VentiladorModule,
    XboxSeriesXModule,
    MazoModule,
    ArenaGatoModule,
    VentiladorPcModule,
    GuitarraElectricaModule,
    BocinaModule,
    ChamarraModule,
    PerfumeModule,
    PcGamerModule,
    TaladroModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
        errors: {
          useValue: {
            required: 'El campo es requerido',
            minlength: ({ requiredLength, actualLength }) => 
                        `Expect ${requiredLength} but got ${actualLength}`,
            invalidAddress: error => `Address isn't valid`
          }
        }
      })
    ],
    
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
