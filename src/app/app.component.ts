import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { ToDoCollectionComponent } from './component/to-do-collection/to-do-collection.component';
import { ToDoSingleComponent} from './component/to-do-single/to-do-single.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent as WillBlogHeaderComponent } from './blog/header/header.component';
import { FooterComponent as WillBlogFooterComponent } from './blog/footer/footer.component';
import { HeaderArticleService } from './service/header-article.service';
import { ArticleListComponent } from './article/article-list/article-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    ButtonModule,
    PanelModule,
    CardModule,
    ToDoCollectionComponent,
    ToDoSingleComponent,
    FormsModule,
    WillBlogHeaderComponent,
    WillBlogFooterComponent,
  
    ArticleListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    keyword="";
    get articles(){
      return this.articleService.jsonDataResult;
    }
    constructor(private articleService:HeaderArticleService){
    }
}
