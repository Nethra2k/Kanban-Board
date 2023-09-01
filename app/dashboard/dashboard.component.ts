import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { HttpClient } from '@angular/common/http';
import { ThemeServiceService } from '../theme-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(public service:ServiceKanbanServiceService,private httpClient:HttpClient,public themeService:ThemeServiceService) { 
    httpClient.get<any>("http://quotable.io/random").subscribe((x)=>this.quote=x.content)
  }

  ngOnInit(): void {
    this.service.isAnyProjectOpened=false;
    // this.themeService.theme="rgba(0,0,0,0.7)";
    // this.themeService.sidenavColor=this.themeService.
    this.date=new Date();
    timer(0,1000).subscribe(()=>this.date=new Date());
  }

  date!:Date;
  // time!:any;

  quote!:string;

}
