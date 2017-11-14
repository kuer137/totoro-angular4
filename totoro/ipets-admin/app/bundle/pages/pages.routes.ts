import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';


//import { InformationComponent } from './information/information.component';

export const routes:Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
	    { path:'',redirectTo:'info',pathMatch:'fulll' },
	    { path:'info',component:InformationComponent }
    ]
  }
];
export const  pageRoutes:ModuleWithProviders = RouterModule.forChild(routes);
