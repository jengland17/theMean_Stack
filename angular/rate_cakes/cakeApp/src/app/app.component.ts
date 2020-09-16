import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'cakeApp';
  newCake: any;
  show: boolean;
  cakes: any=[];
  cake: any=[];
  selectedCake: any;
  avg: any;
  
  
  constructor(private _httpService: HttpService) {}
  
  ngOnInit() {
    this.getCakesFromService();
    this.newCake = {name: "", image: ""}
  }

  getCakesFromService() {
    let observable = this._httpService.getCake();
    observable.subscribe(data => {
      console.log("All the cakes", data)
      this.cakes = data
    })
  }

  onSubmit() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("here is the new cake", data)
      this.newCake = {name: "", image: ""}
      this.getCakesFromService();
    })
  }

  showTheCake(id) {
    this.show = true;
    let observable = this._httpService.showCake(id);
    observable.subscribe(data => {
      this.cake = data
      this.selectedCake = this.cake

      var sum = 0;
      for(let i = 0; i < this.selectedCake.comments.length; i++) {
        sum += this.selectedCake.comments[i].rating;
      }
      this.avg = sum/this.selectedCake.comments.length

    })
  }

} 
