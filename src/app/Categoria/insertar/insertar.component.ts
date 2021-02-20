import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Modelo/Categoria';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  categoria:Categoria = new Categoria();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
 
  Guardar(categoria: Categoria){    
    //this.categoria.nombre_categoria = nombre_categoria;
    //this.categoria.activo = activo;
    this.service.crearCategoria(this.categoria)
    .subscribe(data=>{
      alert("Se agrego con Exito..");      
    })
  }

}
