import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.scss']
})
export class RateFormComponent implements OnInit {

  @Input() cake: any;

  newComment: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newComment = {comment: "", rating: ""};
  }

  commentSubmit(id) {
    let observable = this._httpService.addComment(this.newComment, id);
    observable.subscribe(data => {
      console.log("adding a comment and rating", data)
      this.newComment = {comment: "", rating: ""}
    })
  }

}
