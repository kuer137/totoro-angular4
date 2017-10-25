import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(
    public router: Router
  ) { }

  //登录
  public login():void{
    this.router.navigateByUrl("pages");
    console.log('登录2')
  }

}
