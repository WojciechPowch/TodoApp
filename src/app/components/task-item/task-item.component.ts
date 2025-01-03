import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() taskName?: string;
}
