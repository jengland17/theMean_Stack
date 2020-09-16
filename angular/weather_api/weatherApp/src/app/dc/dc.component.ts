import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.scss']
})
export class DcComponent implements OnInit {

  weather = {}

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.getWeather('Washington DC')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
  }

}
