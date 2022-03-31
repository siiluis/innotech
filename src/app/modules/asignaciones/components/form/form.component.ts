import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/modules/empleados/empleados.service';
import { IEmpleado1 } from 'src/app/modules/empleados/models/empleados.model';
import { EquiposService } from 'src/app/modules/equipos/equipos.service';
import { IEquipo } from 'src/app/modules/equipos/models/equipo.model';
import { LicenciasService } from 'src/app/modules/licencias/licencias.service';
import { ILicencia } from 'src/app/modules/licencias/models/licencia.model';
import { IPeriferico } from 'src/app/modules/perifericos/models/perifericos.model';
import { PerifericosService } from 'src/app/modules/perifericos/perifericos.service';
import { AsignacionesService } from '../../asignaciones.service';
import { createForm, IAsignaciones } from '../../models/asignaciones.model';

@Component({
  selector: 'add-asignaciones',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  asignacionForm!: FormGroup;
  btnText!: string;
  asignaciones: IAsignaciones[] = [];
  asignacion!: IAsignaciones;
  empleado!: any;
  equipo!: any;
  empleados: IEmpleado1[] = [];
  equipos: IEquipo[] = [];
  perifericos: IPeriferico[] = [];
  selectedPerifericos!: IPeriferico[];

  constructor(
    private asignacionesService: AsignacionesService,
    private empleadosService: EmpleadosService,
    private equiposService: EquiposService,
    private perifericosService: PerifericosService,

    private route: Router
  ) {
    this.asignacion = this.route.getCurrentNavigation()?.extras.state?.data;
    this.cargarEmpleados();
    this.empleadosService.getEmpleados();
    this.cargarEquipos();
    this.equiposService.getEquipos();
    this.cargarPerifericos();
    this.perifericosService.getPerifericos();
  }

  ngOnInit(): void {
    if (this.asignacion) {
      this.asignacionForm = createForm(this.asignacion);
      this.btnText = 'Actualizar';
      this.selectedPerifericos = this.asignacion.perifericos;
    } else {
      this.asignacionForm = createForm({} as IAsignaciones);
      this.btnText = 'Guardar';
    }
  }

  add() {
    this.asignacionForm.patchValue({ perifericos: this.selectedPerifericos });
    if (this.btnText === 'Actualizar') {
      this.asignacionesService.updateAsignaciones(this.asignacionForm.value);
    } else {
      this.asignacionesService.addAsignaciones(this.asignacionForm.value);
      console.log(this.asignacionForm);
    }
  }

  cargarEmpleados() {
    this.empleadosService.empleados$.subscribe((empleados: IEmpleado1[]) => {
      this.empleados = empleados;
    });
  }

  cargarEquipos() {
    this.equiposService.equipos$.subscribe((equipos: IEquipo[]) => {
      equipos.forEach((equipo) => {
        if (equipo.disponible === '1') {
          this.equipos.push(equipo);
        }
      });
    });
  }

  cargarPerifericos() {
    this.perifericosService.perifericos$.subscribe(
      (perifericos: IPeriferico[]) => {
        this.perifericos = perifericos;
      }
    );
  }

  comparer(o1: IPeriferico, o2: IPeriferico): boolean {
    return o1 && o2 ? o1.id === o2.id : o2 === o2;
  }
}
