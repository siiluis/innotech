import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILicencia } from '../../licencias/models/licencia.model';

export interface IEquipo {
  id?: number;
  disponible: string;
  tipoEquipo: string;
  serial: string;
  ram: string;
  procesador: string;
  discoDuro: string;
  licencias: ILicencia[];
  createdAt?: Date;
}

export function createForm(equipo: IEquipo) {
  return new FormGroup({
    id: new FormControl(equipo.id),
    tipoEquipo: new FormControl(equipo.tipoEquipo, [Validators.required]),
    serial: new FormControl(equipo.serial, [Validators.required]),
    ram: new FormControl(equipo.ram, [Validators.required]),
    procesador: new FormControl(equipo.procesador, [Validators.required]),
    discoDuro: new FormControl(equipo.procesador, [Validators.required]),
    licencias: new FormControl(),
  });
}
