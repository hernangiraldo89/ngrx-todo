import { createSelector } from '@ngrx/store';
import {AppState} from '../../state/app.reducers';

export const selectTodoList = (state: AppState) => state.todoList;
