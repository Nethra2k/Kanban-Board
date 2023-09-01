import { Component, OnInit } from '@angular/core';
import { ServiceKanbanServiceService } from '../service.kanban-service.service';
import { Project } from '../Project';
import { MatDialog } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectPageComponent } from '../project-page/project-page.component';
import { NewProjectComponent } from '../new-project/new-project.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { NewColumnComponent } from '../new-column/new-column.component';
import { Router } from '@angular/router';
import { ThemeServiceService } from '../theme-service.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public service: ServiceKanbanServiceService, public dialog: MatDialog, private router: Router, public themeService: ThemeServiceService) {
    let date: Date = new Date();
    // this.pList=this.getPlist();
    // console.log(this.pList)
    // console.log(date)
  }

  ngOnInit(): void {
    // this.service.login("bansalayush8279@gmail.com", "Ayush@111");
    // this.expansionPanelStatus=false;
  }
  panelOpenState = false;
  pList!: Project[];

  displayList() {
    if (this.searchText == "") {
      // console.log(this.service.userProject)
      return this.service.userProject;
    }
    else {
      return this.service.userProject.filter(x => x.projectName.startsWith(this.searchText));
    }
    // return this.service.userProject;
  }

  searchText: string = "";

  erase() {
    this.searchText = "";
    // this.searchProject();
    this.displayList();
  }

  openDialog() {
    this.dialog.open(NewProjectComponent)
  }

  openDialogForChangePass() {
    this.dialog.open(ChangePasswordComponent,
    //   {
    //   height:'45%',
    //   width:'30%'
    // }
    )
  }

  logout() {
    this.service.LogOut()
  }

  // newColumnName!: string;
  // addColumn() {
  //   this.service.newColumn(this.newColumnName)
  // }

  showAddColumnTool: boolean = this.service.isAnyProjectOpened;
  projectOpened() {
    this.service.isAnyProjectOpened = true;
    // this.showAddColumnTool=this.service.isAnyProjectOpened;
  }

  newColumnDiaglog() {
    this.dialog.open(NewColumnComponent)
  }

  sendMail() {
    this.router.navigateByUrl("someone@gmail.com")
  }

  // color:string = this.themeService.textColor;
  checked = false;
  disabled = false;
  
  changeTheme(){
    this.themeService.changeTheme()
    // alert("fsw")
  }

}
