import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor(private service:ServiceKanbanServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  forgotPasswordForm=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@(\.?[a-z0-9]){3,}\.com$')]),
    })                                                                            
    get email() {
      return this.forgotPasswordForm.get('email') as FormControl;
    }
    
    sendForgottenMail(){
      this.service.sendForgetMail(this.forgotPasswordForm.value.email??"")
    }

    goToLoginPage(){
      this.router.navigateByUrl("login")
    }
}
