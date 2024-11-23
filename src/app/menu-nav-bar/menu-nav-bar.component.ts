import { Component } from '@angular/core';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu-nav-bar',
  standalone: true,
  imports: [
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownToggle,
    NgClass,
    RouterLink
  ],
  templateUrl: './menu-nav-bar.component.html',
  styleUrl: './menu-nav-bar.component.css'
})
export class MenuNavBarComponent {
  isCollapsed: any;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
