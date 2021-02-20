import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Categoria/listar/listar.component';
import { EditarComponent } from './Categoria/editar/editar.component';
import { InsertarComponent } from './Categoria/insertar/insertar.component';
import { ContenidoBodyComponent } from './Components/contenido-body/contenido-body.component';
import { IndexCategoriaComponent } from './Categoria/index-categoria/index-categoria.component';

//Agregamos los componentes a utilizar para el enrutamiento
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component:ContenidoBodyComponent},    
  { path: 'indexCategoria', component:IndexCategoriaComponent},
  { path: 'insertarCategoria', component:InsertarComponent},  
  { path: 'listarCategoria', component:ListarComponent},  
  { path: 'editarCategoria', component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
