import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _htpp: HttpClient) { }


  getNote() {
    return this._htpp.get('/notes')
  }

  addNote(newnote) {
    return this._htpp.post('/notes', newnote)
  }






}
