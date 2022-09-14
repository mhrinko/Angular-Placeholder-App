import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsComponent } from './blogs/blog-posts/blog-posts.component';
import { BlogPostListItemComponent } from './blogs/blog-post-list-item/blog-post-list-item.component';
import { BlogPostListComponent } from './blogs/blog-post-list/blog-post-list.component';
import { BlogsEffects } from './blogs/store/blogs.effects';
import * as fromApp from './store/app.reducer';

@NgModule({
    declarations: [
        AppComponent,
        BlogPostsComponent,
        BlogPostListItemComponent,
        BlogPostListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([BlogsEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
