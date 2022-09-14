import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostsComponent } from './blogs/blog-posts/blog-posts.component';
import { BlogPostsResolverService } from './blogs/services/blog-posts-resolver.service';

const routes: Routes = [
    { path: '', component: BlogPostsComponent, resolve: [BlogPostsResolverService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
