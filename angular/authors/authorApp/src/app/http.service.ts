import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAuthor() {
    return this._http.get<[]>("/author");
  }

  findAuthor(id) {
    // console.log("Found the Author id: ", id)
    return this._http.get(`/author/${id}`);
  }

  addAuthor(newAuthor) {
    return this._http.post<{errors}>("/author", newAuthor);
  }

  editAuthor(edit, id) {
    return this._http.put<{errors, message}>(`/edit/${id}`, edit);
  }

  deleteAuthor(id) {
    return this._http.delete(`/delete/${id}`);
  }
}
