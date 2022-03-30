import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleado, IEmpleado, IEmpleado1 } from './models/empleados.model';
import { IResponse, MyResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  readonly APP = 'empleado';
  readonly API = `${environment.URL_API}/${this.APP}`;
  empleadosLista: IEmpleado[] = [];
  empleadosLista1: IEmpleado1[] = [];
  empleados: Empleado = new Empleado();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addEmpleados(empleados: IEmpleado1) {
    this.http.post(this.API, empleados).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el empleado.');
      this.getEmpleados();
      this.router.navigate(['/app/modules/empleados/list']);
    });
  }

  getEmpleados() {
    this.http.get<MyResponse>(this.API).subscribe((response: MyResponse) => {
      this.empleadosLista1 = response.data;
    });
  }

  getEmpleado(id: string) {
    return this.http.get<MyResponse>(`${this.API}/${id}`);
  }

  updateEmpleados(empleado: IEmpleado1) {
    this.http
      .patch<IResponse>(`${this.API}/${empleado.id}`, empleado)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el empleado.');
        this.router.navigate(['/app/modules/empleados/list']);
      });
  }

  deleteEmpleados(id: number | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el empleado.');
        this.getEmpleados();
      });
  }
}
