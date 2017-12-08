import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule , Http } from '@angular/http';   //字组件要用到http的，这里都要引入HttpModule

import { pageRoutes } from './pages.routes';
import { NgaModule } from '../../theme/nga.module';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';

console.log(NgaModule,'page.module')
@NgModule({
  declarations: [
    PagesComponent,
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
