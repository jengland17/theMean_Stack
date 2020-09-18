import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';

  notes: {}
  newnote: {};


  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newnote = {note: ""}
    this.showNotes()
  }

  showNotes() {
    let observable = this._httpService.getNote();
    observable.subscribe(data => {
      this.notes = data
    })
  }

  addNote() {
    let observable = this._httpService.addNote(this.newnote);
    observable.subscribe(data => {
      this.newnote = {note: ""}
    })
  }


}
