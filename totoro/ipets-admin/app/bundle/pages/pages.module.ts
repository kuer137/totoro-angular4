import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { pageRoutes } from './pages.routes';

import { PagesComponent } from './bundle/pages/pages.component';
import { InformationComponent } from './bundle/pages/information/information.component';

@NgModule({
  declarations: [
    PagesComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pageRoutes)
  ],
  providers: []
})
export class PageModule { }
