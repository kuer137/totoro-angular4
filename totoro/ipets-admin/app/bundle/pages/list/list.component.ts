import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	public sqlPhpUrl = 'http://www.kuer6.my/api/list.php';
	public delUrl = 'http://www.kuer6.my/api/del.php';
	public modifyUrl = 'http://www.kuer6.my/api/modify.php';
	public searchUrl = 'http://www.kuer6.my/api/search.php';
	public hasData:boolean = false;
	public pageLists:Array<any>;  //数据类型接口

  constructor(public http:Http) { }

  ngOnInit() {
  }


  //获取列表数据
  getData():void{
	this.http.get(this.sqlPhpUrl)
        .toPromise().then((response) => {
      	this.pageLists = response.json().data;
      	console.log(response.json(),'返回的数据');
    });
  }

  //删除数据
  delData(id,index):void{
  	let datas = JSON.stringify({
      id:id
    });
  	this.http.post(this.delUrl,datas)
        .toPromise().then((response) => {
      	console.log(response.json(),'返回的数据');
      	let json = response.json();
      	if(json.code==0){
      		this.pageLists.splice(index,1);
      	}
    });
  }

  //修改数据
  modifyData(id,destribute,index):void{
  	if(!destribute) return;
  	let datas = JSON.stringify({
      id:id,
      destribute:destribute
    });
  	this.http.post(this.modifyUrl,datas)
        .toPromise().then((response) => {
      	let json = response.json();
      	if(json.code==0){
      		let row = this.pageLists.slice(index,index+1);
      		row[0].destribute = destribute;
      		this.pageLists.splice(index,1,row[0])
      		console.log(row,'修改的数据');
      	}
    });
  }

  //根据id搜索
  searchData(id):void{
  	if(!id){
  		this.getData();
  		return;
  	}
  	let datas = JSON.stringify({
      id:id
    });
  	this.http.post(this.searchUrl,datas)
        .toPromise().then((response) => {
      	console.log(response.json(),'返回的数据');
      	let json = response.json();
      	if(json.code==0){
      		this.pageLists = response.json().data;
      	}
    });
  }


}
