import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbNav} from '@ng-bootstrap/ng-bootstrap';
import {LessonEditFormComponent} from './lesson-edit-form/lesson-edit-form.component';
import {LessonSearchPageComponent} from './lesson-search-page/lesson-search-page.component';
import {MenuNavBarComponent} from './menu-nav-bar/menu-nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgbDropdown, NgbDropdownMenu,
    NgbDropdownItem, NgbDropdownToggle, NgbNav, LessonEditFormComponent,
    LessonSearchPageComponent, MenuNavBarComponent,
    FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'td3';
}
