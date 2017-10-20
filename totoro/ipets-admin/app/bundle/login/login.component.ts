import { Component, OnInit } from '@angular/core';

import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public LoginService: LoginService
  ) { }

  ngOnInit() {
  }

  doLogin(){
    //调用登录服务
    this.LoginService.login();
  }

}
