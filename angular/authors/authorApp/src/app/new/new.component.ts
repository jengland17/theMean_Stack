import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  newAuthor = {}
  error: string;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
    this.error = ''
  }

  onNew() {
    let observable = this._httpService.addAuthor(this.newAuthor)
    observable.subscribe(data => {
      console.log("Submitted new Author", data)
      this.newAuthor = {name: ""}
      if (data.errors) {
        // console.log("here is the error", errors)
        this.error = data.errors
        console.log("here is the new one: ", this.error)
      }
    })
  }

}
