import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
<<<<<<< HEAD
import { AddHeroComponent } from './pages/add-hero/add-hero';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // 1. Rutas públicas reales
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Corregido: cambiado 'user-registration' por 'register'

  // 2. Rutas protegidas por el Guardián de Autenticación
=======
import { AddHeroComponent } from './pages/add-hero/add-hero'; // Corregido: removido .component
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: RegisterComponent },

  // Rutas protegidas por el Guardián de Autenticación
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: 'add-hero', component: AddHeroComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritesComponent, canActivate: [AuthGuard] },

<<<<<<< HEAD
  // 3. Redirecciones por defecto seguras (Mandan a login si no hay sesión)
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }, // Corregido: manda a login en lugar de catalog para evitar bucles del Guard
=======
  // Redirecciones por defecto
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalog' }
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< HEAD
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> d3c4394f0efa54f27fef31e32e44fbdf73745455
