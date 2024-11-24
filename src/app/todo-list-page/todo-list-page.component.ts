import {Component, inject} from '@angular/core';
import {TodoService} from '../todo.service';
import { TodoDTO } from './todo.model';
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.css'
})
export class TodoListPageComponent {
  private readonly todoService = inject(TodoService);
  todos: TodoDTO[] = [];
  onClickReload() {
    this.todoService.getTodos().subscribe({
      next: data => {
        console.log('finished loaded Todos, saving to component field');
        this.todos = data;
      }, error: err => {
        console.log('Failed to load Todos from Http server', err);
      }
    })
  }
}
