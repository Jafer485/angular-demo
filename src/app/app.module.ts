import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { StudentsComponent } from './students/students.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { StaffComponent } from './staff/staff.component';
import { AttendanceComponent } from './attendance/attendance.component';
const routes: Routes = [
    {path:'one',component:OneComponent},
    {path:'students',component:StudentsComponent},
    {path:'staff',component:StaffComponent},
    {path:'attendance',component:AttendanceComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentsComponent,
    StaffComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
