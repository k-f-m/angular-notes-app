import { Component } from '@angular/core';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-notes-display',
  standalone: true,
  imports: [],
  templateUrl: './notes-display.component.html',
  styleUrl: './notes-display.component.css'
})
export class NotesDisplayComponent {
  notes = NOTES;

  showText(text: string) {
    alert(text);
  }
}

