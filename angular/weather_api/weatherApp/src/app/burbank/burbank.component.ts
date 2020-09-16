import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.scss']
})
export class BurbankComponent implements OnInit {

  weather = {}

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.getWeather('Burbank')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
  }

}
