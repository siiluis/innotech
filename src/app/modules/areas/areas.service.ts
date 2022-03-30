import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IResponse, MyResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';
import { Area } from './models/area.model';

@Injectable({
  providedIn: 'root',
})
export class AreasService {
  readonly APP = 'area';
  readonly API = `${environment.URL_API}/${this.APP}`;
  areas: Area[] = [];
  areas$ = new EventEmitter<Area[]>();
  constructor(private http: HttpClient) {}

  getAreas() {
    this.http.get<MyResponse>(this.API).subscribe((response: MyResponse) => {
      this.areas = response.data;
      this.areas$.emit(this.areas);
    });
  }
}
