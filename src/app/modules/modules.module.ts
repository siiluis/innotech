import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'asignaciones',
    loadChildren: () =>
      import('./asignaciones/asignaciones.module').then(
        (m) => m.AsignacionesModule
      ),
  },
  {
    path: 'equipos',
    loadChildren: () =>
      import('./equipos/equipos.module').then((m) => m.EquiposModule),
  },
  {
    path: 'licencias',
    loadChildren: () =>
      import('./licencias/licencias.module').then((m) => m.LicenciasModule),
  },
  {
    path: 'perifericos',
    loadChildren: () =>
      import('./perifericos/perifericos.module').then(
        (m) => m.PerifericosModule
      ),
  },
  {
    path: 'empleados',
    loadChildren: () =>
      import('./empleados/empleados.module').then((m) => m.EmpleadosModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ModulesModule {}
