import { Component, OnInit } from '@angular/core';
import { PerifericosService } from '../../perifericos.service';
import { createForm, IPeriferico } from '../../models/perifericos.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnText!: string;
  perifericoSeleccionado!: IPeriferico;
  PerifericoForm!: FormGroup;
  constructor(
    private perifericosService: PerifericosService,
    private route: Router
  ) {
    this.perifericoSeleccionado =
      this.route.getCurrentNavigation()?.extras.state?.data;
  }

  ngOnInit(): void {
    if (this.perifericoSeleccionado) {
      this.PerifericoForm = createForm(this.perifericoSeleccionado);
      this.btnText = 'Actualizar';
    } else {
      this.PerifericoForm = createForm({} as IPeriferico);
      this.btnText = 'Guardar';
    }
  }

  add() {
    if (this.btnText === 'Actualizar') {
      this.perifericosService.updatePerifericos(this.PerifericoForm.value);
    } else {
      this.perifericosService.addPerifericos(this.PerifericoForm.value);
    }
  }
}
