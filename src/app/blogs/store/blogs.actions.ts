import { createAction, props } from "@ngrx/store";
import { PayloadInterface } from '../../shared/models/payload.interface';
import { BlogPost } from '../models/blog-post.model';

export const FETCH_POSTS = '[Blogs] Fetch Posts';
export const SET_POSTS = '[Blogs] Set Posts';
export const SET_FILTER = '[Blogs] Set Filter';

export const fetchPosts = createAction(FETCH_POSTS);
export const setPosts = createAction(SET_POSTS, props<PayloadInterface<BlogPost[]>>());
export const setFilter = createAction(SET_FILTER, props<PayloadInterface<string>>());
