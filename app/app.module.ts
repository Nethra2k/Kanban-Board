import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { NewProjectComponent } from './new-project/new-project.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import {MatInputModule} from '@angular/material/input';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import {MatRippleModule} from '@angular/material/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewColumnComponent } from './new-column/new-column.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { OverDueTaskComponent } from './over-due-task/over-due-task.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {MatSelectModule} from '@angular/material/select';
import { ColumnDetailsComponent } from './column-details/column-details.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    ProjectPageComponent,
    NewProjectComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    AddTaskComponent,
    HeaderComponent,
    FooterComponent,
    ChangePasswordComponent,
    TodayTasksComponent,
    PageNotFoundComponent,
    NewColumnComponent,
    TaskDetailsComponent,
    OverDueTaskComponent,
    ProjectDetailsComponent,
    ColumnDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    DragDropModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatRippleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
