import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crudApp';
  newTask: any;
  editTask: any;
  edit: boolean;
  show: boolean;
  tasks: any=[];
  task: any=[];
  

  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    this.newTask = {title: "", description: ""}
    this.editTask = {title: "", description: ""}
  }

  getTasksFromService() {
  let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('All the tasks', data)
      this.tasks = data['task']
    })
  }

  showInfo(id) {
    this.show = true;
    let observable = this._httpService.showOne(id);
    observable.subscribe(data => {
      console.log(data)
      this.task = data
    })
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe(data => {
      console.log("here is the new data: ", data)
      this.newTask = {title: "", description: ""}
    })
  }

  editForm(id) {
    this.edit = true 
    let observable = this._httpService.showOne(id);
    observable.subscribe(data => {
      console.log(data)
      this.task = data
    })
  }

  onEdit(id) {
    let observable = this._httpService.editTask(this.task, id);
    observable.subscribe(data => {
      console.log("Editing the data", data)
      this.getTasksFromService();
    })
  }

  onDelete(id) {
    let observable = this._httpService.deleteTask(this.task, id);
    observable.subscribe(data => {
      console.log("removing data", data)
      this.getTasksFromService();
    })
  }

}