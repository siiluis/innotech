import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenciasService } from '../../licencias.service';
import { createForm, ILicencia } from '../../models/licencia.model';

@Component({
  selector: 'add-licencia',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  idEquipo: string | undefined = undefined;
  licenciaForm!: FormGroup;
  btnText!: string;
  licenciaSeleccionado!: ILicencia;
  constructor(
    private licenciasService: LicenciasService,
    private route: Router
  ) {
    this.licenciaSeleccionado =
      this.route.getCurrentNavigation()?.extras.state?.data;
  }

  ngOnInit(): void {
    console.log(this.licenciaSeleccionado);

    if (this.licenciaSeleccionado) {
      this.licenciaForm = createForm(this.licenciaSeleccionado);
      this.btnText = 'Actualizar';
    } else {
      this.licenciaForm = createForm({} as ILicencia);
      this.btnText = 'Guardar';
    }
  }

  add() {
    if (this.btnText === 'Actualizar') {
      this.licenciasService.updateLicencia(this.licenciaForm.value);
    } else {
      this.licenciasService.addLicencia(this.licenciaForm.value);
    }
  }
}
