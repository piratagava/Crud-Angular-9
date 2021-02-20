import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppGarcia';

  /*creamos los componentes para que redireccione desde la vista por medio de un boton con una funcion mande a llamar la pagina deseada*/  
  constructor (private titleService: Title, private meta: Meta){
    //definimos titulo para nuestra web app principal
    titleService.setTitle('Sistema Garcia ');
    //cargamos los meta info para la pagina principal de template bootstrap
    meta.addTag({name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'}, true);
    meta.addTag({name:'description', content:'Sistema de Ventas Garcia'}, true);
    meta.addTag({name:'author', content:'Hernan'}, true);
  }

}
