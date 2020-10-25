import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../interfaces/menu-item";
import { MenuItemsService } from "../../services/menu-items.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuItems: MenuItem[] = this.menu.menuItems;

  constructor(private menu: MenuItemsService) {
  }

  ngOnInit(): void {
  }
}
