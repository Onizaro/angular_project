import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-search-page',
  templateUrl: './lesson-search-page.component.html',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./lesson-search-page.component.css']
})
export class LessonSearchPageComponent {
  searchMode: string = 'basic'; // Default search mode is basic

  // Search criteria object for binding
  searchCriteria = {
    title: '',
    description: '',
    category: '',
    level: '',
    tags: '',
    author: '',
    lastModifiedDate: '',
    startDate: '',
    endDate: '',
    minValue: null,
    maxValue: null
  };

}
