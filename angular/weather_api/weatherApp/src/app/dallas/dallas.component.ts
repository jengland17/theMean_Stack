import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  weather = {}

  ngOnInit() {
    this._httpService.getWeather('Dallas')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
  }

}
