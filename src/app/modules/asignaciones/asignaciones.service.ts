import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAsignaciones } from './models/asignaciones.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class AsignacionesService {
  readonly APP = 'asignacion';
  readonly API = `${environment.URL_API}/${this.APP}`;

  asignacionesLista: IAsignaciones[] = [];
  asignacionesSelect = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addAsignaciones(asignacion: IAsignaciones) {
    this.http.post(this.API, asignacion).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el equipo.');
      this.getAsignaciones();
      this.router.navigate(['/app/modules/asignaciones/list']);
    });
  }

  getAsignaciones() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.asignacionesLista = response.data;
      console.log(response.data);
    });
  }

  getAsignacion() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updateAsignaciones(asignacion: IAsignaciones) {
    this.http
      .patch<IResponse>(`${this.API}/${asignacion.id}`, asignacion)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo Asignacion.');
        this.router.navigate(['/app/modules/asignaciones/list']);
      });
  }

  deleteAsignaciones(id: number | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino Asignacion.');
        this.getAsignaciones();
      });
  }
}
