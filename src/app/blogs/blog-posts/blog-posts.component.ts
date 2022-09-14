import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as BlogsActions from '../store/blogs.actions';

@Component({
    selector: 'app-blog-posts',
    templateUrl: './blog-posts.component.html',
    styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

    filterText: string = '';
    $filterText: Observable<string> | undefined = undefined;
    formGroup: FormGroup;

    constructor(
        private store: Store<fromApp.AppStateInterface>,
        private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            filterText: this.formBuilder.control('')
        });
    }

    ngOnInit(): void {
        this.$filterText = this.store.select(x => x.blogs.filterText);
    }

    onInput() {
        const payload = { payload: this.formGroup.get('filterText')?.value as string };
        this.store.dispatch(BlogsActions.setFilter(payload));
    }

}
