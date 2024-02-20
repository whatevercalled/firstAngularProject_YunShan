import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { ToDoCollectionComponent } from './component/to-do-collection/to-do-collection.component';
import { ToDoSingleComponent} from './component/to-do-single/to-do-single.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ButtonModule,
    PanelModule,
    CardModule,
    ToDoCollectionComponent,
    ToDoSingleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-project';
}
