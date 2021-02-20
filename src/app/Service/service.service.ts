import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Categoria } from "../Modelo/Categoria";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  constructor(private http:HttpClient) { }

  //Backend access
  Url='http://localhost:8080/categoria/listarCategoria/';
  
  //insertar datos hasta el backend
  UrlAdd='http://localhost:8080/categoria/insertarCategoria/';

  //Actualizar Por id
  UrlUpdate='http://localhost:8080/categoria/actualizarCategoria/';

  getCategoria(){
    //[] es un array 
    return this.http.get<Categoria[]>(this.Url);
  }

  //paso como parametro objeto categoria <Categoria>= objeto 
  crearCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.UrlAdd,categoria);
  }

  getCategoriaId(id:number){
    return this.http.get<Categoria>(this.UrlUpdate+"/"+id);
  }

  updateCategoria(categoria:Categoria){
    return this.http.put<Categoria>(this.UrlUpdate+"/"+categoria.id_categoria,categoria);
  }
}
