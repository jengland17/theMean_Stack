import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() cakeToShow: any;
  @Input() avgRating: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }


}
