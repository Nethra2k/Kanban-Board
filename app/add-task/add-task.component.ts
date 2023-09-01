import { Component, OnInit } from '@angular/core';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private service:ServiceKanbanServiceService) { 
    this.projectMembers=service.userProject.filter((x)=>x.projectId==service.currentProjectId1)[0].members
  }

  ngOnInit(): void {
  }

  taskName!:string;
  description!:string;
  deadLine!:string;
  assignee!:string;
  priority!:number;
  projectMembers!:string[];

  saveAssignee(assigne:string){
    this.assignee=assigne;
  }
saveTask(){
  // console.log(this.taskName);
  // console.log(this.description);
  // console.log(this.deadLine);
  // console.log(this.priority);
  // alert(this.assignee)
  this.service.addTaskToProject(this.taskName,this.description,this.deadLine,this.assignee,this.priority)
}
}
