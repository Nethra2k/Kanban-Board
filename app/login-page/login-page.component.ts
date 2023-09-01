import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service:ServiceKanbanServiceService,private router:Router) { 
    // this.service.login("bansalayush8279@gmail.com","Ayush@111")
  }

  ngOnInit(): void {
  }

  hide = true;

  loginForm=new FormGroup({
    
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@(\.?[a-z0-9]){3,}\.com$')]),
    password:new FormControl('',[Validators.required,Validators.pattern('')])
    })                                                                            
    get email() {
      return this.loginForm.get('email') as FormControl;
      
    }
    
    get password(){
      return this.loginForm.get('password') as FormControl;
    }
    
    emailId!:any;

  onLogin(){
    this.service.login(this.loginForm.value.email??"",this.loginForm.value.password??"")
  }
}
