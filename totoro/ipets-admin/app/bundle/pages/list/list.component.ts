import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/Rx';  //toPromise需要用到

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public sqlPhpUrl = 'http://www.kuer6.my/api/list.php'

  constructor(public http:Http) { }

  ngOnInit() {
  }


  getData():void{
	this.http.get(this.sqlPhpUrl)
        .toPromise().then((response) => {
      	// this.phpData = response.json();
    });
  }

}
