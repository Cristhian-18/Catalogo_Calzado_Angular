import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';

// Rutas //
import { AppRoutingModule } from './app-routing.module';

// Componentes //
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HombresComponent } from './pages/Catalogo/hombres/hombres.component';
import { MujeresComponent } from './pages/Catalogo/mujeres/mujeres.component';
import { NinosComponent } from './pages/Catalogo/ninos/ninos.component';
import { CardComponent } from './components/card/card.component';
import { UltimasNovedadesComponent } from './pages/Catalogo/ultimas-novedades/ultimas-novedades.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SeccMarcasComponent } from './components/secc-marcas/secc-marcas.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { PaginacionCatalogoComponent } from './components/paginacion-catalogo/paginacion-catalogo.component';
import { InfoModalsComponent } from './components/info-modals/info-modals.component';
import { NovedadesComponent } from './components/cartas-catalogo/novedades/novedades.component';
import { CartHombreComponent } from './components/cartas-catalogo/cart-hombre/cart-hombre.component';
import { CartMujeresComponent } from './components/cartas-catalogo/cart-mujeres/cart-mujeres.component';
import { CartNinosComponent } from './components/cartas-catalogo/cart-ninos/cart-ninos.component';

//servicios//
import { ServicioHombreService } from './services/servicio_hombre/servicio-hombre.service';
import { ServicioMujerService } from './services/servicio_mujer/servicio-mujer.service';
import { ServicioUltimosmodelosService } from './services/servicio_ultimosmodelos/servicio-ultimosmodelos.service';
import { ConexMarcaService } from './services/conexiones/conex-marca/conex-marca.service';
import { ConexProductosService } from './services/conexiones/conex-productos/conex-productos.service';
import { HttpClientModule } from '@angular/common/http';

import { FormMarcaComponent } from './pages/admin/forms/form-marca/form-marca.component';
import { FormProductosComponent } from './pages/admin/forms/form-productos/form-productos.component';
import { FormCategoriaComponent } from './pages/admin/forms/form-categoria/form-categoria.component';
import { NavbarAdminComponent } from './pages/admin/shared/components/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './pages/admin/shared/components/sidebar-admin/sidebar-admin.component';
import { FormListarproductosComponent } from './pages/admin/forms/form-listarproductos/form-listarproductos.component';
import { FormInicioComponent } from './pages/admin/forms/form-inicio/form-inicio.component';
import { RegistrarComponent } from './pages/admin/forms/form-productos/registrar/registrar.component';
import { ModificarComponent } from './pages/admin/forms/form-productos/modificar/modificar.component';
import { TablaProductoComponent } from './pages/admin/shared/components/tablas-admin/tabla-producto/tabla-producto.component';
import { RegistrarMarcaComponent } from './pages/admin/forms/form-marca/registrar-marca/registrar-marca.component';
import { ModificarMarcaComponent } from './pages/admin/forms/form-marca/modificar-marca/modificar-marca.component';
import { TablaMarcaComponent } from './pages/admin/shared/components/tablas-admin/tabla-marca/tabla-marca.component';
import { RegistrarCategoriaComponent } from './pages/admin/forms/form-categoria/registrar-categoria/registrar-categoria.component';
import { ModificarCategoriaComponent } from './pages/admin/forms/form-categoria/modificar-categoria/modificar-categoria.component';
import { TablaCategoriaComponent } from './pages/admin/shared/components/tablas-admin/tabla-categoria/tabla-categoria.component';
import { TablaUsuariosComponent } from './pages/admin/shared/components/tablas-admin/tabla-usuarios/tabla-usuarios.component';
import { FormUsuariosComponent } from './pages/admin/forms/form-usuarios/form-usuarios.component';





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
    SeccMarcasComponent,
    FiltroComponent,
    PaginacionCatalogoComponent,
    InfoModalsComponent,
    NovedadesComponent,
    CartHombreComponent,
    CartMujeresComponent,
    CartNinosComponent,
    FormMarcaComponent,
    FormProductosComponent,
    FormCategoriaComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    FormListarproductosComponent,
    FormInicioComponent,
    RegistrarComponent,
    ModificarComponent,
    TablaProductoComponent,
    RegistrarMarcaComponent,
    ModificarMarcaComponent,
    TablaMarcaComponent,
    RegistrarCategoriaComponent,
    ModificarCategoriaComponent,
    TablaCategoriaComponent,
    TablaUsuariosComponent,
    FormUsuariosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicioHombreService,
    ServicioMujerService,
    ServicioUltimosmodelosService,
    ConexMarcaService,
    ConexProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
