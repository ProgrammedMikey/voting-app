import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import postReducer from './post_reducer';
import booksReducer from './books_reducer';
import ActiveBook from './active_book_reducer';

const rootReducer = combineReducers({
   form,
   auth:authReducer,
   posts:postReducer,
   books:booksReducer,
   activeBook: ActiveBook
});
export default rootReducer;
