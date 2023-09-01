import { Component, OnInit } from '@angular/core';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private service:ServiceKanbanServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  projName!:string;
  projDesc!:string;

  name!:string;
  projectType!:number;

  memberId!:string;
  membersList:string[]=[]

  addMember(){
    this.service.isUserPresent(this.memberId).subscribe((x)=>{
      if(x){
      this.membersList.push(this.memberId)
      this.memberId=""
      }
      else{
        this._snackBar.open("User not registered", "OK")
      }
    })
  }

  removeMember(member:string){
    this.membersList.splice(this.membersList.indexOf(member),1);
  }
  
  save(){
    // console.log(this.projName)
    // console.log(this.projDesc)
    this.service.newProject(this.projName,this.projDesc,this.membersList)
  }
}
