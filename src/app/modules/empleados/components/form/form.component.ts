import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AreasService } from 'src/app/modules/areas/areas.service';
import { Area } from 'src/app/modules/areas/models/area.model';
import { MyResponse } from 'src/app/shared/models/response.model';
import { EmpleadosService } from '../../empleados.service';
import { createForm, Empleado, IEmpleado1 } from '../../models/empleados.model';

@Component({
  selector: 'add-empleados',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  empleadoForm!: FormGroup;
  areas: Area[] = [];
  btnText!: string;
  empleadoSelecionado!: IEmpleado1;
  areasSeleccionada!: any;
  selectedValue: any;
  constructor(
    private empleadosService: EmpleadosService,
    private route: Router,
    private areasService: AreasService
  ) {
    this.empleadoSelecionado =
      this.route.getCurrentNavigation()?.extras.state?.data;
    this.cargarAreas();
    this.areasService.getAreas();
  }

  ngOnInit(): void {
    if (this.empleadoSelecionado) {
      this.empleadoForm = createForm(this.empleadoSelecionado);
      this.btnText = 'Actualizar';
    } else {
      this.empleadoForm = createForm({} as IEmpleado1);
      this.btnText = 'Guardar';
    }
  }

  cargarAreas() {
    this.areasService.areas$.subscribe((areas: Area[]) => {
      this.areas = areas;
    });
  }

  add() {
    if (this.btnText === 'Actualizar') {
      this.empleadosService.updateEmpleados(this.empleadoForm.value);
      console.log(this.empleadoForm.value);
    } else {
      this.empleadosService.addEmpleados(this.empleadoForm.value);
      console.log(this.empleadoForm.value);
    }
  }

  selectArea($event: any) {
    console.log($event);
  }
}
