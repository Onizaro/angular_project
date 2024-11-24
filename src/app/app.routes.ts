import { Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import {TestPage1Component} from "./test-page1/test-page1.component";
import {TodoListPageComponent} from "./todo-list-page/todo-list-page.component";


// Configuration des routes
export const routes: Routes = [
  { path: 'lesson-search-page', component: LessonSearchPageComponent },
  { path: 'lesson-edit-form', component: LessonEditFormComponent },
  { path: 'lesson-list', component: LessonListPageComponent },
  { path: 'lesson/:id', component: LessonDetailPageComponent },
  { path:'test-page1', component: TestPage1Component },
  {path:'todos', component: TodoListPageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
