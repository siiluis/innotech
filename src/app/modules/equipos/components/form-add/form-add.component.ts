import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenciasService } from 'src/app/modules/licencias/licencias.service';
import { ILicencia } from 'src/app/modules/licencias/models/licencia.model';
import { EquiposService } from '../../equipos.service';
import { createForm, IEquipo } from '../../models/equipo.model';

@Component({
  selector: 'add-equipo',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  idEquipo: string | undefined = undefined;
  equipoForm!: FormGroup;
  btnText!: string;
  equipoSeleccionado!: IEquipo;
  selectedLicencias!: ILicencia[];
  licencias!: ILicencia[];
  constructor(
    private equiposService: EquiposService,
    private route: Router,
    private licenciasService: LicenciasService
  ) {
    this.equipoSeleccionado =
      this.route.getCurrentNavigation()?.extras.state?.data;
    this.cargarLicencias();
    this.licenciasService.getLicencias();
  }

  ngOnInit(): void {
    if (this.equipoSeleccionado) {
      this.equipoForm = createForm(this.equipoSeleccionado);
      this.btnText = 'Actualizar';
    } else {
      this.equipoForm = createForm({} as IEquipo);
      this.btnText = 'Guardar';
    }
  }

  add() {
    this.equipoForm.patchValue({ licencias: this.selectedLicencias });
    if (this.btnText === 'Actualizar') {
      this.equiposService.updateEquipo(this.equipoForm.value);
    } else {
      this.equiposService.addEquipo(this.equipoForm.value);
    }
  }

  cargarLicencias() {
    this.licenciasService.licencias$.subscribe((licencias: ILicencia[]) => {
      this.licencias = licencias;
    });
  }
  comparer(o1: ILicencia, o2: ILicencia): boolean {
    return o1 && o2 ? o1.id === o2.id : o2 === o2;
  }
}
