import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppStateInterface } from '../../store/app.reducer';
import { BlogPost } from '../models/blog-post.model';
import * as BlogsActions from '../store/blogs.actions';

@Injectable({
    providedIn: 'root'
})
export class BlogPostsResolverService implements Resolve<BlogPost[]> {

    constructor(
        private actions$: Actions, private store: Store<AppStateInterface>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BlogPost[] | Observable<BlogPost[]> | Promise<BlogPost[]> {
        this.store.dispatch(BlogsActions.fetchPosts())
        return this.actions$.pipe(
            ofType(BlogsActions.setPosts),
            take(1),
            map(x => x.payload)
        );
    }

}
