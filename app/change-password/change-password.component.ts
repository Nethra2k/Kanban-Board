import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private kanban:FormBuilder,private service:ServiceKanbanServiceService) { }

  ngOnInit(): void {
  }

  changePassDetails=this.kanban.group({
    oldPassword:['',[Validators.required]],
    newPassword:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
   },
    {validators:this.confirmPass}
   )

   confirmPass(pass:AbstractControl):ValidationErrors|null
{
  var getnewPassword=pass.get('newPassword')?.value;

  var getConfirmPassword=pass.get('confirmPassword')?.value;

if(getConfirmPassword=="")
{
  return {passMatch1:false}
}
else if(getnewPassword!=getConfirmPassword)
  {
    return {passMatch2:false}
  }
  return null;
}


 get oldPassword(){
  return this.changePassDetails.get('oldPassword');
 }
 get newPassword(){
  return this.changePassDetails.get('newPassword');
 }
 get confirmPassword()
 {
  return this.changePassDetails.get('confirmPassword');
 }

 save(){
  let oldPass=this.changePassDetails.value.oldPassword??""
  let newPass=this.newPassword?.value??"";
  this.service.changePassword(oldPass,newPass??"")
 }

}
