import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-categoria',
  templateUrl: './index-categoria.component.html',
  styleUrls: ['./index-categoria.component.css']
})
export class IndexCategoriaComponent implements OnInit {

  //Solo si quiero ocultar div o contenido sea en la misma vista
  ocultarTabla: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
