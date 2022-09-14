import { ActionReducerMap, combineReducers } from '@ngrx/store';

import * as fromBlogs from '../blogs/store/blogs.reducer';

export interface AppStateInterface {
    blogs: fromBlogs.BlogsStateInterface;
}

export const appReducer: ActionReducerMap<AppStateInterface> = {
    blogs: fromBlogs.blogsReducer
};
