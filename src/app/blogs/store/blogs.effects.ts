import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, take } from 'rxjs/operators';
import { BlogQueryingService } from '../services/blog-querying.service';
import * as BlogsActions from './blogs.actions';

@Injectable()
export class BlogsEffects {

    constructor(
        private actions$: Actions, private blogsQueryingService: BlogQueryingService) { }

    fetchBlogPosts = createEffect(() => this.actions$.pipe(
        ofType(BlogsActions.fetchPosts),
        mergeMap(() => this.blogsQueryingService.getBlogPosts()
            .pipe(
                take(1),
                map(x => ({ type: BlogsActions.SET_POSTS, payload: x }))
            ))
    ));
}
