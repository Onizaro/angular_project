import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoDTO } from './todo-list-page/todo.model';
import { TodoModel } from './todo-list-page/todo.model'; 
import {DefaultService} from '../generated/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly apiUrl = '/api/todos';
  toDTOs(todoArray: TodoDTO[]): TodoModel[] {
    return todoArray .map(x => new TodoModel(x));
  }

  constructor() {}

  private readonly httpClient = inject(HttpClient); 
  private readonly todoApiService = inject(DefaultService);
  private toModel(todoDTO: TodoDTO): TodoModel {
    return new TodoModel(todoDTO);
  }



  private toModels(todoDTOs: TodoDTO[]): TodoModel[] {
    return todoDTOs.map(todoDTO => new TodoModel(todoDTO));
  }

  // Get all Todos
  getTodoDTOs(): Observable<TodoModel[]> {
    return this.httpClient.get<TodoDTO[]>(this.apiUrl).pipe(
      map((todos) => this.toModels(todos))  
    );
  }

  getTodoDTO(id: number): Observable<TodoModel> {
    return this.httpClient.get<TodoDTO>(`${this.apiUrl}/${id}`).pipe(
      map((todoDTO) => this.toModel(todoDTO))  
    );
  }

  getTodos(): Observable<TodoModel[]> {
    return this.todoApiService.apiTodosGet()
      .pipe(map(todoArray => this.toDTOs(todoArray)))
  }



}
