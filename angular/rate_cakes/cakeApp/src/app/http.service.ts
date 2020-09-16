import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCake() {
    return this._http.get("/cakes");
  }

  showCake(id) {
    return this._http.get(`/cakes/${id}`);
  }

  addCake(newcake) {
    return this._http.post("/cakes", newcake);
  }

  addComment(comment, id) {
    return this._http.post(`/cakes/${id}`, comment);
  }

}
