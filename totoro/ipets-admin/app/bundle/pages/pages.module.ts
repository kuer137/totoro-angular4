import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { pageRoutes } from './pages.routes';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    PagesComponent,
    InformationComponent,
  ],
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  providers: []
})
export class PageModule { }
