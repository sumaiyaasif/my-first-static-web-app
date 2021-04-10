import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, AboutComponent, BlogComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
