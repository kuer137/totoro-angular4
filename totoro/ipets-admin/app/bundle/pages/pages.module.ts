import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule , Http } from '@angular/http';   //字组件要用到http的，这里都要引入HttpModule


import { CommonModule } from '@angular/common';   //ngIf ngFor需要协同BrowserModule引入，BrowserModule在app.module.ts中引入


import { pageRoutes } from './pages.routes';
import { NgaModule } from '../../theme/nga.module';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    PagesComponent,
    AddComponent,
    ListComponent,
    InformationComponent
  ],
  imports: [
    NgaModule,
    pageRoutes,
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: []
})
export class PageModule { }
