import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './bundle/login/login.component';

export const appRoutes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'**',
    component:LoginComponent
  },
  {
    path:'pages',
    loadChildren:'./bundle/pages/pages.module#PageModule'
  }
]
