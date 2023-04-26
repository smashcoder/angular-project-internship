import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditsComponent } from './credits/credits.component';
import { SessionComponent } from './session/session.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormTeacherComponent } from './form-teacher/form-teacher.component';
import { FormCoursesComponent } from './form-courses/form-courses.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'credit', component: CreditsComponent },
  { path: 'session', component: SessionComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'form-overlay', component: FormOverlayComponent },
  { path: 'form-edit', component: FormEditComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdminComponent,
    DashboardComponent,
    CreditsComponent,
    SessionComponent,
    StudentComponent,
    TeacherComponent,
    CoursesComponent,
    FormOverlayComponent,
    FormEditComponent,
    LoginpageComponent,
    FormTeacherComponent,
    FormCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, [RouterModule.forRoot(routes)],
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
