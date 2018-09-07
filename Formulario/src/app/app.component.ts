import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Formulario';

  documento = [
    /*{'name': 'JS', position: 'manager'},
    {'name': 'FO', position: 'designer'},
    {'name': 'Nosfer', position: 'Programer'}*/
  ];

  model: any = {};
  model2: any = {};

  agregarDocumento(): void{
    this.documento.push(this.model);
  }

  borrarDocumento(): void{

  }
  myValue;
  editarDocumento(i): void{
    this.model2.name = this.documento[i].name;
    this.myValue = i;
  }

  actualizarDocumento(): void{
    console.log(this.model2)
  }
}