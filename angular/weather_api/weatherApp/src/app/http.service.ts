import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string) {

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d3e81036c4efda906fc817c008d81199`)

  }



}
