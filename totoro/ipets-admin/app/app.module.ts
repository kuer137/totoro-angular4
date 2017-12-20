import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { LoginService } from './bundle/login/service/login.service';


import { AppComponent } from './app.component';
import { ComponentComponent } from './theme/component/component.component';
import { TopComponent } from './theme/component/top/top.component';
import { LeftComponent } from './theme/component/left/left.component';
import { HeadTitleComponent } from './theme/component/head-title/head-title.component';
import { LoginComponent } from './bundle/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    TopComponent,
    LeftComponent,
    HeadTitleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
