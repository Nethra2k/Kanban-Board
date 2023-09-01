import { Component, OnInit } from '@angular/core';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';

@Component({
  selector: 'app-new-column',
  templateUrl: './new-column.component.html',
  styleUrls: ['./new-column.component.css']
})
export class NewColumnComponent implements OnInit {

  constructor(private service:ServiceKanbanServiceService) { }

  ngOnInit(): void {
  }
  columnName!:string;
  taskLimit!:number;

  save(){
    this.service.newColumn(this.columnName,this.taskLimit)
  }
}
