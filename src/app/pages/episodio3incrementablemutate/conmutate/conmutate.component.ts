import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-conmutate',
  templateUrl: './conmutate.component.html',
  styleUrls: ['./conmutate.component.css']
})
export class ConmutateComponent implements OnInit {

  public contador1 = signal(-1);

  public conmutate = signal({nombre:"santiago",edad:39,contador:0});

  constructor() { }

  /*

  set --> REMPLAZA TODO EL VALOR DEL SIGNAL Y NO LE IMPORTA QUE TENGA UN VALOR PREVIAMENTE GUARDADO, PODEMOS USARLO PARA DATOS PRIMITIVOS Y NO PRIMITOS
  update --> IGUAL QUE EL SET REMPLAZA TODO EL VALOR PERO LA DIFERENCIA ES QUE PUEDES RECUPERAR EL VALOR ANTERIOR Y HACER ALGO CON EL COMO UN CONTADOR O MODIFICAR LA VARIABLE PERO UNA VEZ TERMINE EL UPDATE SE REMPLAZA TODO... NO TE VAYAS A IR CON LA FINTA, PUEDE SER QUE MODIFIQUES UN OBJETO ARRAY Y TODO O UN JSON O ETC... Y USES EL UPDATE
             Y A SIMPLE VISTA VERAS QUE AL MOMENTO DE UTILIZAR EL UPDATE VEAS QUE SOLO CAMBIO LAS PROPIEDADES PERO EN SI SE HIZO UN REMPLAZO GENERAL COMO LO HIZO EL SET

  mutate --> El mutate te da la oportunidad de recuperar el valor anterior y modificarlo, este no remplazara los valores si no que trabajara con el valor actual
             NOTA: esto es solo para datos NO PRIMITIVOS...
  */

  ngOnInit() {
  }

  public eventoclick():void{
    this.contador1.update( valor => valor+3);
  }

  public eventoconmutate():void{
    //Los valores primitivos (booleanos, integer, numericos, decimales ...) se pasan como una copia
    //Los valores no primitos (arreglo, objeto, cualquier cosa) por referencial...
    console.log("muta");
    this.conmutate.mutate(valor => {
      valor.edad=40;
      valor.nombre = "joel calvo";
      valor.contador = valor.contador +2;
    });
  }

}
