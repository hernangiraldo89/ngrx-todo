import {createAction, props} from '@ngrx/store';
import {Todo} from '../models/todo.model';

export const addTodoAction = createAction(
  '[TODO] Add todo',
  props<{ todo: Todo }>()
);

export const changeTodoStatusAction = createAction(
  '[TODO] Change todo status',
  props<{ id: number }>()
);

export const editTodoNameAction = createAction(
  '[TODO] Edit todo name',
  props<{ todo: Todo }>()
);


export const deleteTodoAction = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);

export const changeAllTodoStatusAction = createAction(
  '[TODO] Change all todo status',
  props<{ status: boolean }>()
);
