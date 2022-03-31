import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { FormAddComponent } from './components/form-add/form-add.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add/:id', component: FormAddComponent },
      { path: 'add', component: FormAddComponent },
      { path: 'list', component: ListComponent },
    ],
  },
];
@NgModule({
  declarations: [HomeComponent, FormAddComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class LicenciasModule {}
