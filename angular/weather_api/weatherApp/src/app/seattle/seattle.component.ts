import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.scss']
})

export class SeattleComponent implements OnInit {
  
  weather = {}
  

  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getWeather('Seattle')
    .toPromise()
    .then(data => {
      console.log("This is the weather", data)
      this.weather = data
    })
    

  }

}
