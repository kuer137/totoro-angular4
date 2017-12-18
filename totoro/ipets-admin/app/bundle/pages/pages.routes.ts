import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { InformationComponent } from './information/information.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


//import { InformationComponent } from './information/information.component';

export const routes:Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
	    { path:'',redirectTo:'info',pathMatch:'full' },
	    { path:'info',component:InformationComponent },
	    { path:'add',component:AddComponent },
	    { path:'list',component:ListComponent },
    ]
  }
];
export const  pageRoutes:ModuleWithProviders = RouterModule.forChild(routes);
