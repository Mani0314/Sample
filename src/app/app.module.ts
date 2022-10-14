import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation-menubar/navigation-menubar.component'
import { StudentListComponent } from './features/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentEditComponent } from './features/student-edit/student-edit.component';
import { EmployeeListComponent } from './features/employee-list/employee-list.component';
import { EmployeeEditComponent } from './features/employee-edit/employee-edit.component';
import { ProductComponent } from './features/product/product.component';
import { ProductEditComponent } from './features/product-edit/product-edit.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { Child2Component } from './features/child2/child2.component';
import { Child1Component } from './features/child1/child1.component';
import { ParentComponent } from './features/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentListComponent,
    StudentEditComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    ProductComponent,
    ProductEditComponent,
    ProductListComponent,
    ParentComponent,
    Child2Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
