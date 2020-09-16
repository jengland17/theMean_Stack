import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.scss']
})
export class SanjoseComponent implements OnInit {

  weather = {}

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.getWeather('San Jose')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
  }

}
