import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';
import { ILicencia, Licencia } from './models/licencia.model';

@Injectable({
  providedIn: 'root',
})
export class LicenciasService {
  readonly APP = 'licencia';
  readonly API = `${environment.URL_API}/${this.APP}`;
  licenciasLista: ILicencia[] = [];
  licencia: Licencia = new Licencia();
  licencias$ = new EventEmitter<ILicencia[]>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addLicencia(licencia: ILicencia) {
    this.http.post(this.API, licencia).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el licencia.');
      this.getLicencias();
      this.router.navigate(['/app/modules/licencias/list']);
    });
  }

  getLicencias() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.licenciasLista = response.data;
      this.licencias$.emit(this.licenciasLista);
    });
  }

  getLicencia(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateLicencia(licencia: ILicencia) {
    this.http
      .patch<IResponse>(`${this.API}/${licencia.id}`, licencia)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el licencia.');
        this.router.navigate(['/app/modules/licencias/list']);
      });
  }

  deleteLicencia(id: number | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el licencia.');
        this.getLicencias();
      });
  }
}
