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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HeaderofertasComponent,
    HomeComponent,
    SupermercadoComponent,
    ModaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
