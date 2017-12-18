import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';  //toPromise需要用到

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
	public indexUrl = 'http://www.kuer6.my/api/text.php?q=';
  public sqlPhpUrl = 'http://www.kuer6.my/api/sql.php'
	public phpData = '没数据';

  constructor(public http:Http) { }

  ngOnInit() {
    console.log(2323);
    this.http.get(this.indexUrl)
        .toPromise().then((response) => {
      // console.log(response,response.json());
      // this.phpData = response.json();
    });

  }


  getPHPdata(data):void{
    this.http.get(this.indexUrl+data)
        .toPromise().then((response) => {
      this.phpData = response.json();
    });
  };

  sqlPhp(data):void{
    this.http.get(this.sqlPhpUrl+"?data="+data)
        .toPromise().then((response) => {
      // this.phpData = response.json();
    });
  }



}
