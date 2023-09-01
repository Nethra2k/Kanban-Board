import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BodyComponent } from './body/body.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { OverDueTaskComponent } from './over-due-task/over-due-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  {
    path: "login", component: LoginPageComponent
  },
  {
    path: "register", component: RegisterPageComponent
  },
  {
    path: "addProject", component: NewProjectComponent
  }
  ,
  {
    path: "body", component: BodyComponent
    ,canActivate:[LoginGuardGuard]
    ,children:[
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "project/:id", component: ProjectPageComponent
  },
  {
    path: "addTask", component: AddTaskComponent
  },
  {
    path: "todayTasks", component: TodayTasksComponent
  },
  {
    path: "overDueTasks", component: OverDueTaskComponent
  },
  {
    path: "", redirectTo:"/body/dashboard" , pathMatch: "full"
  }
    ]
  },
  {
    path: "forgotPassword", component: ForgotPasswordPageComponent
  },
  {
    path: "", redirectTo:"/login" , pathMatch: "full"
  },
  {
    path: "**", component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
