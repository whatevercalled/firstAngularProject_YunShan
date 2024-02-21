import { Component } from '@angular/core';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleBodyComponent,ArticleHeaderComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})

export class ArticleListComponent {

}
