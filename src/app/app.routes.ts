import { Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import {LessonListPageComponent} from './lesson-list-page/lesson-list-page.component';

// Configuration des routes
export const routes: Routes = [
  { path: 'lesson-search-page', component: LessonSearchPageComponent },
  { path: 'lesson-edit-form', component: LessonEditFormComponent },
  { path: 'lesson-list', component: LessonListPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
