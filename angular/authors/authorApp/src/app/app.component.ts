
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'authorApp';


  constructor(private _httpService: HttpService, private _router: Router) { }


  ngOnInit() {
    this._router.navigate(['/home'])
  }




}
