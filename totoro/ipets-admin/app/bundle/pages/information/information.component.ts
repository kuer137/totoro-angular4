import { Component, OnInit } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';  //toPromise需要用到

import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
	public indexUrl = 'http://www.kuer6.my/api/text.php?q=sdfdsfsdf9';
	public phpData = '没数据';

  constructor(public http:Http) { }

  ngOnInit() {
    console.log(2323);
    this.http.get(this.indexUrl)
        .toPromise().then((response) => {
      console.log(response);
      this.phpData = '222';
    });

  }



}
