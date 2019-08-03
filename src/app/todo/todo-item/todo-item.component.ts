import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges} from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl } from '@angular/forms';
import {AppState} from '../../state/app.reducers';
import {Store} from '@ngrx/store';
import * as TodoActions from './../state/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  // @ts-ignore
  @ViewChild('inputEdit') inputEdit: ElementRef;

  public checked: FormControl;
  public edit: FormControl;
  public editing: boolean;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.checked = new FormControl(this.todo.completed);
    this.edit = new FormControl('');

    this.checked.valueChanges
      .subscribe( value => {
        const action = TodoActions.changeTodoStatusAction({id: this.todo.id});
        this.store.dispatch(action);
      });
  }

  public editFn(status: boolean): void {
    this.editing = status;

    if (this.editing) {
      setTimeout( () => {
        this.inputEdit.nativeElement.select();
      });
    } else {
      const todo = new Todo(this.edit.value);
      todo.id = this.todo.id;
      const action = TodoActions.editTodoNameAction({todo});
      this.store.dispatch(action);
    }
  }

  public deleteItem(): void {
    const action = TodoActions.deleteTodoAction({id: this.todo.id});
    this.store.dispatch(action);
  }

}
