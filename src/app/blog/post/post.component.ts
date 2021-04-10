import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogPost } from 'src/app/model/blogPost.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  @Input() post: BlogPost; 
  constructor() { }

  ngOnInit(): void {
  }

}
