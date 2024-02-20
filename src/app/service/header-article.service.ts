import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeaderArticleService {
  jsonDataResult:any;
  constructor(private http:HttpClient) { 
    this.http.get('api/articles.json').subscribe((res)=>{
      alert(11);
      this.jsonDataResult=res;
    })
  }
}
