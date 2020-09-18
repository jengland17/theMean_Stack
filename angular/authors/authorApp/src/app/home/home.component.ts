import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  authors: []

  ngOnInit() {
    this.showAuthor();
  }

  showAuthor() {
    let observable = this._httpService.getAuthor();
    observable.subscribe(data => {
      // console.log("Here are the authors", data)
      this.authors = data
    })
  }

  removeAuthor(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("removing author", data)
      this.showAuthor()
    })
  }

}
