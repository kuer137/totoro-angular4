import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';  //toPromise需要用到

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
	public indexUrl = 'php/user-register-mock.json';
	public phpData = '没数据';

  constructor(public http:Http) { }

  ngOnInit() {
    console.log(2323);
    this.http.get(this.indexUrl)
      .toPromise().then((response) => {
      console.log(response.json());
    });

  }



}
