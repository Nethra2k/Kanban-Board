import { Task } from "./Task";

export class Column{
    columnName!:string;
    taskLimit!:number;
    taskList!:Task[];
    
    constructor(columnName:string,taskList:Task[],taskLimit:number){
        this.columnName=columnName;
        this.taskLimit=taskLimit;
        this.taskList=taskList;
    }
}