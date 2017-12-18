import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule , Http } from '@angular/http';   //字组件要用到http的，这里都要引入HttpModule

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
    HttpModule
  ],
  providers: []
})
export class PageModule { }
