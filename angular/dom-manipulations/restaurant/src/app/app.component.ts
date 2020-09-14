import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dallas Dojo Buffet';
  buttonName: string
  tableRequested: boolean
  tableStatus: string

  constructor() {

  }

  ngOnInit() {
    this.tableStatus = 'Pending'
    this.buttonName = 'request table'
    this.tableRequested = false
  }

  onTableRequested(e) {
    if (this.tableRequested){
      this.tableStatus = 'Pending'
      this.tableRequested = false
    } else {
      this.tableStatus = 'requested'
    }
    console.log(e)
    // e.target.innerHTML = 'i changed it'
    this.tableStatus = 'Requested'
  }

  requestTable() {
    this.tableStatus
  }

  cancelTable() {

  }

}
