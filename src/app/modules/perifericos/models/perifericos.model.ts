import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IPeriferico {
  id?: number;
  descripcion: string;
  marca: string;
  createdAt?: Date;
}

export class Accesorio {
  constructor(
    public id = undefined,
    public marca = '',
    public descripcion = ''
  ) {}
}

export function createForm(accesorio: IPeriferico) {
  return new FormGroup({
    id: new FormControl(accesorio.id),
    marca: new FormControl(accesorio.marca, [Validators.required]),
    descripcion: new FormControl(accesorio.descripcion, [Validators.required]),
  });
}
