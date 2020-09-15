import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.showOne();
  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    return this._http.get("/tasks");
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe((data) => console.log("Got our tasks!", data));
  }

  showOne(id) {
    return this._http.get(`/tasks/${id}`);
    // task.subscribe((data) => console.log("One task", data))
  }

  addTask(newtask) {
    return this._http.post("/tasks", newtask);
  }

  editTask(editTask, id) {
    return this._http.put(`/tasks/${id}`, editTask)
  }

  deleteTask(deleteTask, id) {
    return this._http.delete(`/tasks/${id}`, deleteTask)
  }

}
