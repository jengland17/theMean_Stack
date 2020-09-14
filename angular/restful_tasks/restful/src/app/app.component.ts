import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restful';
  tasks = [];

  constructor(private _httpService: HttpService) {}

  // ngOnInit(){
  //   this._httpService.getTask().subscribe(data => console.log('All the tasks', data))
  // }



}
