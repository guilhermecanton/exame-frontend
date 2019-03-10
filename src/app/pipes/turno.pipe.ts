import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turno'
})
export class TurnoPipe implements PipeTransform {

  transform(turno) {
    let turnoFormatado = null;
    switch (turno) {
      case "MANHA":
        turnoFormatado = "Manhã"
        break;
      case "TARDE":
        turnoFormatado = "Tarde"
        break;
      case "NOITE":
        turnoFormatado = "Noite"
        break;
    }
    return turnoFormatado;
  }

}
