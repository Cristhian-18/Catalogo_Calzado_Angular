import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes//
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { UltimasNovedadesComponent } from './pages/Catalogo/catalogo_landing/ultimas-novedades/ultimas-novedades.component';
import { HombresComponent } from './pages/Catalogo/catalogo_landing/hombres/hombres.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MujeresComponent } from './pages/Catalogo/catalogo_landing/mujeres/mujeres.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'ultimas_novedades', component:UltimasNovedadesComponent},
  {path:'hombres', component:HombresComponent},
  {path:'mujeres', component:MujeresComponent},
  {path:'admin', component:AdminComponent},
  {path:'login', component:LoginComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
