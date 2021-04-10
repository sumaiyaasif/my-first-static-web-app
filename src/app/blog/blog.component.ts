import { Component, OnInit } from '@angular/core';
import { DevtoParserService } from '../devto-parser.service';
import { BlogPost } from '../model/blogPost.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogContent: any;
  blogPosts: BlogPost[];
  constructor(private rrsFeedService: DevtoParserService) {
  }

  ngOnInit(): void {
    this.rrsFeedService.RssData.subscribe(posts => {
      this.blogPosts = posts;
    });
    console.log(this.rrsFeedService.RssData);
  }


}
