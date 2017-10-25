import { NgModule, ModuleWithProviders } from '@angular/core';


import {
  MenuService
} from './service';


//@NgModule({
//  declarations:[],
//  imports:[],
//  exports:[]
//})

const NGA_SERVICES = [
  MenuService
];

export class NgaModule{
  static forRoot():ModuleWithProviders {  //static 静态属性
    return <ModuleWithProviders>{
      ngModule:NgaModule,
      providers:[   //服务
        ...NGA_SERVICES
      ]
    };
  }
}
