import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ILicencia {
  id?: number;
  disponible: boolean;
  producto: string;
  productoSerial: 'dsadsdas458454';
  createdAt?: Date;
}

export class Licencia {
  constructor(
    public id = undefined,
    public producto = '',
    public productoSerial = ''
  ) {}
}

export function createForm(licencia: ILicencia) {
  return new FormGroup({
    id: new FormControl(licencia.id),
    producto: new FormControl(licencia.producto, [Validators.required]),
    productoSerial: new FormControl(licencia.productoSerial, [
      Validators.required,
    ]),
  });
}
