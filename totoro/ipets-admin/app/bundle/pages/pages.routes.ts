import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

import { InformationComponent } from './information/information.component';

export const pageRoutes=[
  {
    path:'',
    redirectTo:'info',
    pathMatch:'full'
  },
  {
    path:'info',
    component:InformationComponent
  }
]
