import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'my-first-project';
  url="http://blog.miniasp.com";
  keyword="";
  constructor(){
    setTimeout(()=>{

      this.title="the world wide web";
    },2000)
  }
}
