import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Formulario';
  msg: string = '';
  hideUpdate: boolean = true;

  documento = [];

  model: any = {};
  model2: any = {};

  agregarDocumento(): void {
    this.documento.push(this.model);
    this.msg = 'Campo Agregado';
  }

  borrarDocumento(i): void {
    var respuesta = confirm('Seguro que quiere borrar');
    if (respuesta) {
      this.documento.splice(i, 1);
      this.msg = 'Campo Eliminado';
    }
  }
  myValue;
  editarDocumento(i): void {
    this.hideUpdate = false; 
    this.model2.name = this.documento[i].name;
    this.myValue = i;
  }

  actualizarDocumento(): void {
    let i = this.myValue;
    for (let j = 0; j < this.documento.length; j++) {
      if (i == j) {
        this.documento[i] = this.model2;
        this.msg = 'Campo Actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert(): void {
    this.msg = '';
  }
}