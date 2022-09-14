import { Action, createReducer, on } from "@ngrx/store";

import { BlogPost } from '../models/blog-post.model';
import * as BlogsActions from './blogs.actions';

export interface BlogsStateInterface {
    filterText: string,
    blogPosts: BlogPost[];
}

const initialState: BlogsStateInterface = {
    filterText: '',
    blogPosts: []
};

const _blogsReducer = createReducer(
    initialState,
    on(BlogsActions.setPosts, (state, action) => ({
        ...state,
        blogPosts: [...action.payload]
    })),
    on(BlogsActions.setFilter, (state, action) => ({
        ...state,
        filterText: action.payload
    }))
);

export function blogsReducer(state: BlogsStateInterface | undefined, action: Action) : BlogsStateInterface {
    return _blogsReducer(state, action);
}
