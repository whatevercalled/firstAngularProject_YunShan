import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-to-do-single',
  standalone: true,
  imports: [TableModule],
  templateUrl: './to-do-single.component.html',
  styleUrl: './to-do-single.component.scss'
})
export class ToDoSingleComponent {
   
}
