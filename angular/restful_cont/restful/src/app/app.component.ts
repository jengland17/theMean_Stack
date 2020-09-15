import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restful';
  tasks: any=[];
  task: any=[];
  selectedTask;
  

  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    // this.getTasksFromService();
  }

  getTasksFromService() {
  let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('All the tasks', data)
      this.tasks = data['task']
    })
  }

  showInfo(id) {
    let observable = this._httpService.showOne(id);
    observable.subscribe(data => {
      console.log(data)
      this.task = data
      this.selectedTask = this.task
    })
  }

}
