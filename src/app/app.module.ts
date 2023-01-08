import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas //
import { AppRoutingModule } from './app-routing.module';

// Componentes //
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HombresComponent } from './pages/Catalogo/catalogo_landing/hombres/hombres.component';
import { MujeresComponent } from './pages/Catalogo/catalogo_landing/mujeres/mujeres.component';
import { NinosComponent } from './pages/Catalogo/catalogo_landing/ninos/ninos.component';
import { CardComponent } from './components/card/card.component';
import { UltimasNovedadesComponent } from './pages/Catalogo/catalogo_landing/ultimas-novedades/ultimas-novedades.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SeccMarcasComponent } from './components/secc-marcas/secc-marcas.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { PaginacionCatalogoComponent } from './components/paginacion-catalogo/paginacion-catalogo.component';
import { InfoModalsComponent } from './components/info-modals/info-modals.component';
import { NovedadesComponent } from './components/cartas-catalogo/novedades/novedades.component';
import { CartHombreComponent } from './components/cartas-catalogo/cart-hombre/cart-hombre.component';
import { CartMujeresComponent } from './components/cartas-catalogo/cart-mujeres/cart-mujeres.component';
import { CartNinosComponent } from './components/cartas-catalogo/cart-ninos/cart-ninos.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HombresComponent,
    MujeresComponent,
    NinosComponent,
    CardComponent,
    UltimasNovedadesComponent,
    CarruselComponent,
    AdminComponent,
    LoginComponent,
    SeccMarcasComponent,
    QuienesSomosComponent,
    FiltroComponent,
    PaginacionCatalogoComponent,
    InfoModalsComponent,
    NovedadesComponent,
    CartHombreComponent,
    CartMujeresComponent,
    CartNinosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
