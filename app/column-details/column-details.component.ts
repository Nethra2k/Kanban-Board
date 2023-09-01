import { Component, Inject, OnInit } from '@angular/core';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectPageComponent } from '../project-page/project-page.component';
import { Column } from '../Column';

@Component({
  selector: 'app-column-details',
  templateUrl: './column-details.component.html',
  styleUrls: ['./column-details.component.css']
})
export class ColumnDetailsComponent implements OnInit {

  constructor(private service: ServiceKanbanServiceService,
    public dialogRef: MatDialogRef<ProjectPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Column,
    public dialog: MatDialog
  ) {
    console.log(data)
    this.columnData = data;
    // console.log(this.taskData)
  }

  columnData!:Column;
  ngOnInit(): void {
  }

  updateTaskLimit(){
    this.service.updateColumnTaskLimit(this.columnData);
  }

  deleteColumn(){
    this.service.deleteColumn(this.columnData.columnName)
  }
}
