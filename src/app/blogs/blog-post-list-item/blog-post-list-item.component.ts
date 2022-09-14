import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';

@Component({
    selector: 'app-blog-post-list-item',
    templateUrl: './blog-post-list-item.component.html',
    styleUrls: ['./blog-post-list-item.component.scss']
})
export class BlogPostListItemComponent implements OnInit {

    @Input() blogPost: BlogPost | null = null;
    isAdditionalInfoVisible = false;

    constructor() { }

    ngOnInit(): void {
    }

    toggleAdditionalInfo() {
        this.isAdditionalInfoVisible = !this.isAdditionalInfoVisible;
    }

}
