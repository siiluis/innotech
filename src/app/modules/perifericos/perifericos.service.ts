import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPeriferico } from './models/perifericos.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PerifericosService {
  readonly APP = 'periferico';
  readonly API = `${environment.URL_API}/${this.APP}`;
  periferciosLista: IPeriferico[] = [];
  asignacionesSelect = '';
  perifericos$ = new EventEmitter<IPeriferico[]>();
  constructor(
    private http: HttpClient,
    private notificacionService: NotificacionesService,
    private router: Router
  ) {}

  addPerifericos(periferico: IPeriferico) {
    this.http.post(this.API, periferico).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el Periferico.');
      this.getPerifericos();
      this.router.navigate(['/app/modules/perifericos/list']);
    });
  }

  getPerifericos() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.periferciosLista = response.data;
      this.perifericos$.emit(this.periferciosLista);
    });
  }

  getAccesorio() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updatePerifericos(periferico: IPeriferico) {
    this.http
      .patch<IResponse>(`${this.API}/${periferico.id}`, periferico)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el Periferico.');
        this.router.navigate(['/app/modules/perifericos/list']);
      });
  }

  deletePerifericos(id: number | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el Periferico.');
        this.getPerifericos();
      });
  }
}
