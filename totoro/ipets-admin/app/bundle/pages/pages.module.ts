import { NgModule } from '@angular/core';

import { pageRoutes } from './pages.routes';
//import { NgaModule } from '../../theme/nga.module';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    PagesComponent,
    InformationComponent
  ],
  imports: [
    //NgaModule,
    pageRoutes
  ],
  providers: []
})
export class PageModule { }
