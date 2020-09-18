import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {

  author: Object;
  editAuthor: any;
  error: string

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.findAuthor();
    this.error = ''
    this.author = { name: "" };
  }

  findAuthor() {
    this._route.params.subscribe((params: Params) => {
      // console.log("here is the id: ", params['id'])

      let observable = this._httpService.findAuthor(params["id"]);
      observable.subscribe((data) => {
        this.author = data;
        // console.log("Here is the author", this.author);

      });

    });
  }

  onEdit(id) {
    this._route.params.subscribe((params: Params) => {
      let observable = this._httpService.editAuthor(this.author, id);
      observable.subscribe((data) => {
        console.log("editing the author", data);
        if (data.errors) {
          // console.log("here is the error", errors)
          this.error = data.errors
          console.log("here is the new one: ", this.error)
        }
      });
    });
  }
}
