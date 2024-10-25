import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  { path: '', redirectTo: '/posts', pathMatch: 'full' }, // Default route redirect to posts
{ path: 'posts', component: DisplayPostsComponent }, // Display all posts
{ path: 'post/:id', component: SinglePostComponent}, // View a single post by its id
{ path: 'create-post', component: CreatePostComponent, canActivate: [authGuard] }, // Protected route for creating a post
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: '/posts' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
