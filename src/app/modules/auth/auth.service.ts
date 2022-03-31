import { Injectable } from '@angular/core';
import { IAuth } from './models/auth.model';
import * as bcrypt from 'bcryptjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

interface ResponseLogin {
  access_token: string;
}

function cifrarPassword(password: string): string {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly APP = 'auth';
  readonly API = `${environment.URL_API}/${this.APP}`;
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  actionAuth(credenciales: IAuth, accion: string) {
    if (accion === 'register') {
      this.register(credenciales.email, credenciales.password);
    } else {
      this.login(credenciales.email, credenciales.password);
    }
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(username: string, password: string) {
    this.http
      .post<ResponseLogin>(`${this.API}/login`, { username, password })
      .subscribe((response: ResponseLogin) => {
        localStorage.setItem('token', response.access_token);
        this.router.navigateByUrl('app');
      });
  }

  register(email: string, password: string) {
    const nombres = 'Luis Armando';
    const apellidos = 'Sarmiento ';
    this.http
      .post(`${environment.URL_API}/usuario`, {
        nombres,
        apellidos,
        email,
        password,
      })
      .subscribe((response) => {
        console.log(response);
        this.notificacionService.alertOk('OK', 'Usuario Registrado');
        this.router.navigateByUrl('auth/login');
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }
}
