import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEquipo } from './models/equipo.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  readonly APP = 'equipo';
  readonly API = `${environment.URL_API}/${this.APP}`;
  equiposLista: IEquipo[] = [];
  equipos$ = new EventEmitter<IEquipo[]>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addEquipo(equipo: IEquipo) {
    this.http.post(this.API, equipo).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el equipo.');
      this.getEquipos();
      this.router.navigate(['/app/modules/equipos/list']);
    });
  }

  getEquipos() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.equiposLista = response.data;
      this.equipos$.emit(this.equiposLista);
    });
  }

  getEquipo(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateEquipo(equipo: IEquipo) {
    this.http
      .patch<IResponse>(`${this.API}/${equipo.id}`, equipo)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el equipo.');
        this.router.navigate(['/app/modules/equipos/list']);
      });
  }

  deleteEquipo(id: number | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el equipo.');
        this.getEquipos();
      });
  }
}
