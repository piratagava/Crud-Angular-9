import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from "../../Service/service.service";
import { Categoria } from "src/app/Modelo/Categoria";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  categorias:Categoria[];

  constructor(private service:ServiceService,private  router:Router) { }

  ngOnInit(): void {
    this.service.getCategoria()
    .subscribe(data=>{
      this.categorias=data;
    })
  }

  //desde la vista lista obtiene los datos
  Editar(categoria:Categoria):void{
    localStorage.setItem("id_categoria",categoria.id_categoria.toString());
    this.router.navigate(["editarCategoria"]);
  }

}
