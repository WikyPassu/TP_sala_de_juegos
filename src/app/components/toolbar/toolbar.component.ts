import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../../interfaces/menu-item";
import { AuthService } from "../../services/auth.service";
import { MenuItemsService } from "../../services/menu-items.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private auth: AuthService, private router: Router, private menu: MenuItemsService) {
    this.menuItems = this.menu.getMenu();
  }

  ngOnInit(): void {
  }

  logout(logout: boolean){
    if(logout){
      this.menu.popMenuItem();
      this.auth.logout();
      this.auth.logged = false;
    }
  }
}
