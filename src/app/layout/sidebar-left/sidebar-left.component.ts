import { Component } from '@angular/core';
import { MenuElement } from 'fascinating/lib/components/menu/menu-element';
import { MENU_ELEMENTS } from './config.menu';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent  {

  public MENU_ELEMENTS: MenuElement[] = MENU_ELEMENTS;

}
