import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {
  constructor(private http: Http) {}

  createAPIObservable(text) {
    return this.http.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?$$app_token=GuDqVUt8KjD9xVjZRINRk4Kjh&$q='+text+'&$order=end_date DESC&$limit=50');
  }
}
