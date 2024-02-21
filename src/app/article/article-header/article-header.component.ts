import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [],
  templateUrl: './article-header.component.html',
  styleUrl: './article-header.component.scss'
})
export class ArticleHeaderComponent {
  @Input()
  item:any;
}
