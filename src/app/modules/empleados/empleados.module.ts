import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './components/form/form.component';
import { ListComponent } from '../empleados/components/list/list.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
    ModulesModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class EmpleadosModule {}
