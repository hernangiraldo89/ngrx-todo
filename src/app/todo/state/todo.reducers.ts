import {Action, createReducer, on} from '@ngrx/store';

import * as TodoActions from './todo.actions';

import {Todo} from '../models/todo.model';

const initialState: Todo[] = [
  new Todo('Run'),
  new Todo('Dance')
];

const scoreboardReducer = createReducer(
  initialState,
  on(TodoActions.addTodoAction, (state, {todo}) => ([...state, todo])),
  on(TodoActions.changeTodoStatusAction, (state, { id }) => (state.map( i => {
      if (i.id === id) {
        return {
          ...i,
          completed: !i.completed
        };
      } else {
        return i;
      }
    })
  )),
  on(TodoActions.editTodoNameAction, (state, { todo }) => (state.map( i => {
      if (i.id === todo.id) {
        return {
          ...i,
          text: todo.text
        };
      } else {
        return i;
      }
    })
  )),
  on(TodoActions.deleteTodoAction, (state, { id }) => (state.filter( i => i.id !== id))),
  on(TodoActions.changeAllTodoStatusAction, (state, {status}) => ( state.map(item => {
    return {
      ...item,
      completed: status
    };
  }))),
);

export function reducer(state = initialState, action: Action) {
  return scoreboardReducer(state, action);
}
