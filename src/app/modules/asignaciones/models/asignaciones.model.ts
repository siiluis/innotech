import { FormControl, FormGroup } from '@angular/forms';
import { IEmpleado1 } from '../../empleados/models/empleados.model';
import { IEquipo } from '../../equipos/models/equipo.model';
import { IPeriferico } from '../../perifericos/models/perifericos.model';

export interface IAsignaciones {
  id?: number;
  empleado: IEmpleado1;
  equipo: IEquipo;
  perifericos: IPeriferico[];
  createdAt?: Date;
}

export function createForm(asignacion: IAsignaciones) {
  return new FormGroup({
    id: new FormControl(asignacion.id),
    empleado: new FormControl(asignacion?.empleado?.id),
    equipo: new FormControl(asignacion?.equipo?.id),
    perifericos: new FormControl(),
  });
}

export interface CreateAsignacionDto {
  empleado: IEmpleado1;
  equipo: IEquipo;
  perifericos: IPeriferico[];
}
