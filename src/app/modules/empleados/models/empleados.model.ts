import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Area } from '../../areas/models/area.model';

export interface IEmpleado {
  ID?: string | undefined;
  nombre: string;
  cedula: string;
  email: string;
  telefono: string;
  area: string;
  fecha_creacion?: string;
}

export class Empleado {
  constructor(
    public id = null,
    public nombre = '',
    public cedula = '',
    public email = '',
    public telefono = ''
  ) {}
}

export function createForm(empleado?: IEmpleado1) {
  return new FormGroup({
    id: new FormControl(empleado?.id),
    nombre: new FormControl(empleado?.nombre, [Validators.required]),
    cedula: new FormControl(empleado?.cedula, [Validators.required]),
    email: new FormControl(empleado?.email, [Validators.required]),
    telefono: new FormControl(empleado?.telefono, [Validators.required]),
    area: new FormControl(empleado?.area?.id),
  });
}

export interface IEmpleado1 {
  id: number;
  nombre: string;
  cedula: string;
  email: string;
  telefono: string;
  createdAt?: Date;
  updatedAt?: Date;
  area: Area;
}
