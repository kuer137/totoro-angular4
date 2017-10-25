import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { MenuService } from '../../theme';
import { PAGES_MENU } from './page.menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(
    private _menuService:MenuService
  ) { }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

}
