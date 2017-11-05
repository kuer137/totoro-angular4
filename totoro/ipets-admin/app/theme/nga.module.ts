import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';


import {
  MenuService
} from './service';

const NGA_SERVICES = [
  MenuService
];

@NgModule({
 declarations:[],
 imports:[
     RouterModule
 ],
 exports:[],
 providers:[   //服务
     MenuService
 ]
})




export class NgaModule{
  static forRoot():ModuleWithProviders {  //static 静态属性
    return <ModuleWithProviders>{
      ngModule:NgaModule
    };
  }
}
