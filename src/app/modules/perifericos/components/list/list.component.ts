import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPeriferico } from '../../models/perifericos.model';
import { PerifericosService } from '../../perifericos.service';

class Accesorios {}
@Component({
  selector: 'list-accesorios',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listAsignaciones = [];

  constructor(
    public perifericosService: PerifericosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.perifericosService.getPerifericos();
  }

  redirect(licencia: IPeriferico) {
    this.router.navigate(['/app/modules/perifericos/add'], {
      state: { data: licencia },
    });
  }
}
