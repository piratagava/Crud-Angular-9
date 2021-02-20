import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarComponent } from './Categoria/insertar/insertar.component';
import { ListarComponent } from './Categoria/listar/listar.component';
import { EditarComponent } from './Categoria/editar/editar.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContenidoBodyComponent } from './Components/contenido-body/contenido-body.component';
import { IndexCategoriaComponent } from './Categoria/index-categoria/index-categoria.component';
import { ServiceService } from "../app/Service/service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    InsertarComponent,
    ListarComponent,
    EditarComponent,
    TopNavbarComponent,
    FooterComponent,
    ContenidoBodyComponent,
    IndexCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],//se agrega el service para poder realizar la peticion de sde front y backend
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
