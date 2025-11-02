import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../types/todo.interface';

@Injectable()
export class TodoService {
  http = inject(HttpClient);

  getTodoList(): Observable<Todo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos') as Observable<Todo[]>;
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`) as Observable<Todo>;
  }
}
