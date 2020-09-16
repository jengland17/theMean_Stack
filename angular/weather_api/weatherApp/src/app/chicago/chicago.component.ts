import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.scss']
})
export class ChicagoComponent implements OnInit {

  weather ={}

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.getWeather('Chicago')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
  }

}
