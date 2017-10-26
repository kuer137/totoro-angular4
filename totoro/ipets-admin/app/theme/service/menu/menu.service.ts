import { Injectable } from '@angular/core';

import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';
console.log('进入serviceMenu');

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuService {

  menuItems = new BehaviorSubject<any[]>([]);

  constructor(
    public _router: Router
  ) { }

  /**
   * 更新菜单中的路由
   *
   * @param {Routes} routes Type compatible with app.menu.ts
   */
  public updateMenuByRoutes(routes:Routes){
    let convertedRoutes = routes;
    console.log(routes);
    this.menuItems.next(convertedRoutes);
  }


}
