import { Injectable } from '@angular/core';

import { Router, Routes } from '@angular/router';
import * as _ from 'lodash';

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
    console.log(routes,'menu.service')
    let convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
    this.menuItems.next(convertedRoutes);
  }

  public convertRoutesToMenus(routes:Routes):any[] {
    let items = routes;
    console.log(routes,111)
    return items;
  }



}
