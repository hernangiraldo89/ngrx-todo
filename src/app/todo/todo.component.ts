import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import {AppState} from '../state/app.reducers';
import * as TodoActions from './state/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.completed = false;
  }

  ngOnInit() {}

  public changeStatusAll() {
    this.completed = !this.completed;
    const action = TodoActions.changeAllTodoStatusAction({status: this.completed});
    this.store.dispatch(TodoActions.changeAllTodoStatusAction(action));
  }

}
