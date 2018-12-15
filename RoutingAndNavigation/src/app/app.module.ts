import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'posts', component:PostsComponent},
      
    ])
  ],
  providers: [
    PostsService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
