import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  idEmpleado: string | undefined = undefined;
  empleadoForm: FormGroup;
  areas: Area[] = [];
  areasSeleccionada!: Area;
  btnText: string = 'Guardar';

  constructor(
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute,
    private areasService: AreasService
  ) {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.idEmpleado = params.id;
        this.btnText = 'Actualizar';
      }
    });
    this.empleadoForm = createForm({} as IEmpleado1);
    this.areasService.areas$.subscribe((areas: Area[]) => {
      this.areas = areas;
    });
  }

  ngOnInit(): void {
    this.areasService.getAreas();
    if (this.idEmpleado) {
      this.empleadosService
        .getEmpleado(this.idEmpleado)
        .subscribe((response: MyResponse) => {
          console.log(response);

          this.empleadoForm = createForm(response.data);

          this.areasSeleccionada = response.data.area;
        });
    }
  }

  add() {
    const area = {
      area: this.areasSeleccionada,
    };
    const empleado = {
      ...this.empleadoForm.value,
    } as IEmpleado1;
    empleado.area = this.areasSeleccionada;

    if (this.idEmpleado) {
      this.empleadosService.updateEmpleados(empleado);
    } else {
      this.empleadosService.addEmpleados(empleado);
    }
  }
}
