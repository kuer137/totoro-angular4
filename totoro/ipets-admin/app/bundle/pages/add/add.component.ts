import { Component, OnInit } from '@angular/core';

import { newadd } from './model/newAdd';

import { Http } from '@angular/http';
import 'rxjs/Rx';  //toPromise需要用到

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	public newadd:newadd =new newadd();
	public sqlPhpUrl = 'http://www.kuer6.my/api/add.php'


  constructor(public http:Http) { }

  ngOnInit() {
  	console.log(this.newadd)
  }

  submisData(newadd):void{
  	console.log(newadd,999,this.newadd);
  	let data = JSON.stringify({
      title:newadd.title,
      destribute:newadd.destribute
    });
	this.http.get(this.sqlPhpUrl+"?data="+data)
        .toPromise().then((response) => {
      	// this.phpData = response.json();
    });
  }

}
