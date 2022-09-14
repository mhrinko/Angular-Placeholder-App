import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
    providedIn: 'root'
})
export class BlogQueryingService {

    constructor(private httpClient: HttpClient) { }

    public getBlogPosts(): Observable<BlogPost[]> {
        return this.httpClient.get<BlogPost[]>('https://jsonplaceholder.typicode.com/posts');
    }

}
