import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.reducers';
import * as TodoActions from './../state/todo.actions';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  public txtTodo: FormControl;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.txtTodo = new FormControl('', [Validators.required]);
  }

  public addTodo(): void {
    if (this.txtTodo.invalid) {
      return;
    }

    const todo = new Todo(this.txtTodo.value);
    const action = TodoActions.addTodoAction({ todo });
    this.store.dispatch(action);
    this.txtTodo.setValue('');
  }

}
