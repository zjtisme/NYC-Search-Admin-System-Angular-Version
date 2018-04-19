import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  keyword: string = "";
  news: any;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  fetchNews() {
    if(this.keyword.length > 0)
      this.newsService.createAPIObservable(this.keyword).subscribe(response=>this.news = response.json());
  }

  clearAll() {
    this.keyword = '';
    this.news = null;
  }

  onKeydown(event) {
    if(event.key === "Enter") {
      if(this.keyword.length > 0)
        this.fetchNews();
    }
  }

}
