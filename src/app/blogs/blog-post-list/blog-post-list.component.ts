import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { BlogPost } from '../models/blog-post.model';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-blog-post-list',
    templateUrl: './blog-post-list.component.html',
    styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

    $blogPosts: Observable<BlogPost[]> | undefined;

    constructor(private store: Store<fromApp.AppStateInterface>) { }

    ngOnInit(): void {
        this.$blogPosts = this.store.select(x => x.blogs)
            .pipe(
                map(x => x.blogPosts.filter(
                    y => x.filterText?.trim() ? y.title.indexOf(x.filterText) >= 0 : true
                ))
            );
    }

}
