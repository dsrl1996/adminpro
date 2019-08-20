import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: String = 'Leyenda';
  @Input() progreso: number = 50;
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  //  console.log('leyenda', this.leyenda);
    console.log('progreso', this.progreso);
   }

  ngOnInit() {
  //  console.log('leyenda', this.leyenda);
console.log('progreso', this.progreso);
  }

  onChanges(newValue : number){
  //  console.log (newValue);
  }

 cambiarValor(valor:number){

  if(this.progreso >=100 && valor>0){
    this.progreso = 100;
    return;
  }

  if(this.progreso <=100 && valor < 0){
    this.progreso =0;
    return;
  }
   this.progreso = this.progreso + valor;

   this.cambioValor.emit(this.progreso);
 }

}
