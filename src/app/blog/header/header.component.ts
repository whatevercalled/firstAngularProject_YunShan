import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderArticleService } from '../../service/header-article.service';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers:[HeaderArticleService],
})
export class HeaderComponent {
  title = 'my-first-project';
  url="http://blog.miniasp.com";
  keyword="";
  thecount=0;
  get counter(){
    return (this.thecount&1)==0;
  }
  counterplus(){

    this.thecount++;
  }
  constructor(private articleService:HeaderArticleService){
    setTimeout(()=>{
      console.log(this.articleService.jsonDataResult);
      this.title="the world wide web";
    },2000)
  }
}
