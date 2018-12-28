import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { NuevanoticiaComponent } from './nuevanoticia/nuevanoticia.component';
import { EditnoticiaComponent } from './editnoticia/editnoticia.component';
import { BorrarComponent } from './borrar/borrar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'admin', component: LoginadminComponent },
  { path: 'admin/nuevo', component: NuevanoticiaComponent },
  { path: 'admin/edit/:id', component: EditnoticiaComponent },
  { path: 'admin/del/:id', component: BorrarComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
