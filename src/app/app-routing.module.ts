import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './features/child1/child1.component';
import { Child2Component } from './features/child2/child2.component';
import { EmployeeEditComponent } from './features/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './features/employee-list/employee-list.component';
import { ParentComponent } from './features/parent/parent.component';
import { ProductEditComponent } from './features/product-edit/product-edit.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductComponent } from './features/product/product.component';
import { SenderComponent } from './features/sender/sender.component';
import { StudentEditComponent } from './features/student-edit/student-edit.component';
import { StudentListComponent } from './features/student-list/student-list.component';

const routes: Routes = [
  // {
  //   path : 'student', 
  //   loadChildren: () => import('./features/features.module').then(s => s.FeatureModule)
  // },
  // {
  //   path : '', component : StudentListComponent
  // },
  // {
  //   path : '', component : EmployeeListComponent
  // },
  // {
  //   path : '', component : ProductComponent
  // },
  // 
  {path : '',component : SenderComponent},
  {
    path : 'edit',component : StudentEditComponent
  },
  {
    path : 'edit/:id',component : StudentEditComponent
  },
  {
    path : 'list' , component : StudentListComponent
  },
  {
    path : 'employee/edit' , component : EmployeeEditComponent
  },
  {
    path : 'employee/edit/:id' , component : EmployeeEditComponent
  },
  {path : 'product/edit/:id',component :ProductEditComponent },
  {path : 'product/edit',component :ProductEditComponent },
  {path : 'product/list',component :ProductListComponent },
  {path : 'child/list',component : Child2Component},
  {path : 'child/edit',component : Child1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
