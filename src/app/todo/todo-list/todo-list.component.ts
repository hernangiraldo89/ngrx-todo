import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as TodoSelector from '../state/todo.selectors';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.model';
import {AppState} from '../../state/app.reducers';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  public todoList$: Observable<Todo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.todoList$ = this.store.pipe(select(TodoSelector.selectTodoList));
  }

}
