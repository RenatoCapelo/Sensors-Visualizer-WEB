import { Component } from '@angular/core';
import { temperaturaDivisoes } from '../models/temperaturaSalas.model';

@Component({
  selector: 'app-temperatura-salas',
  templateUrl: './temperatura-salas.component.html',
  styleUrls: ['./temperatura-salas.component.scss'],
})
export class TemperaturaSalasComponent {
  temperaturas: temperaturaDivisoes[] = [
    { temperatura: 25, nomeDivisao: 'Sala 1.9' },
    { temperatura: 14, nomeDivisao: 'Sala 2.3' },
    { temperatura: 12, nomeDivisao: 'Sala 3.7' },
    { temperatura: 27, nomeDivisao: 'Sala 4.8' },
    { temperatura: 18, nomeDivisao: 'Sala 5.4' },
    { temperatura: 16, nomeDivisao: 'Sala 6.3' },
    { temperatura: 28, nomeDivisao: 'Sala 7.2' },
    { temperatura: 21, nomeDivisao: 'Sala 8.6' },
    { temperatura: 11, nomeDivisao: 'Sala 9.2' },
    { temperatura: 29, nomeDivisao: 'Sala 10.7' },
    { temperatura: 23, nomeDivisao: 'Sala 11.3' },
    { temperatura: 20, nomeDivisao: 'Sala 12.8' },
    { temperatura: 13, nomeDivisao: 'Sala 13.7' },
    { temperatura: 30, nomeDivisao: 'Sala 14.6' },
    { temperatura: 15, nomeDivisao: 'Sala 15.5' },
    { temperatura: 29, nomeDivisao: 'Sala 10.7' },
    { temperatura: 23, nomeDivisao: 'Sala 11.3' },
    { temperatura: 20, nomeDivisao: 'Sala 12.8' },
    { temperatura: 13, nomeDivisao: 'Sala 13.7' },
    { temperatura: 30, nomeDivisao: 'Sala 14.6' },
    { temperatura: 15, nomeDivisao: 'Sala 15.5' },
    { temperatura: 29, nomeDivisao: 'Sala 10.7' },
    { temperatura: 23, nomeDivisao: 'Sala 11.3' },
    { temperatura: 20, nomeDivisao: 'Sala 12.8' },


  ];

  addEntry() {
    this.temperaturas.push({temperatura: Math.floor(Math.random()*15),nomeDivisao: `Sala ${Math.floor(Math.random()*4)}.${Math.floor(Math.random()*10)}`})
  }
  removeEntry(){
    this.temperaturas.pop();
  }
}
