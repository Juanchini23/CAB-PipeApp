import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent{
  // i18nSelect
  nombre :string = 'Juan';
  genero :string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes :string[] = ['Juan', 'Manuel', 'Pedro', 'Messi', 'Allen'];
  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos 1 cliente esperando',
    'other' : `tenemos # clientes esperando`
  }

  cambiarCliente(){
    if(this.nombre=='Juan'){
      this.nombre= 'Maria';
      this.genero = 'femenino';
      return;
    }
    if(this.nombre=='Maria'){
      this.nombre= 'Juan';
      this.genero = 'masculino';
      return;
    }
  }

  borrarCliente(){
    this.clientes.pop();
  }

  // key value pipe
  persona = {
    nombre: 'Juan',
    edad: 21,
    direccion: 'Catan'
  }

  // json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aqueman',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: true
    }
  ]

  //async pipe
  miObservable = interval(1000);

  promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  });

}
