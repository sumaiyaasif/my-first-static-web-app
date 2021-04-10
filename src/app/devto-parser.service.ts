import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from "xml2js";
import { Observable, of, Subject } from 'rxjs';
import { BlogPost } from './model/blogPost.model';

@Injectable({
  providedIn: 'root'
})
export class DevtoParserService {
  public RssData: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    this.GetRssFeedData();

  }

  ngOnInit() {
  }

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://dev.to/feed/sumaiyaasif", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: any) => {
          //console.log(result);
          if (result) {
            var blogData: BlogPost[] = result.rss.channel[0].item;
            blogData.forEach(blog => {
              var date = new Date(blog.pubDate);
              const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
              var month = date.getMonth();
              var year = date.getFullYear();
              blog.pubDate = monthNames[month] + " " + year;
            });
            this.RssData.next(blogData);
          }
        });
      });
  }
}
