import { Component } from '@angular/core';
import { NOTES } from '../../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-display',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notes-display.component.html',
  styleUrl: './notes-display.component.css'
})
export class NotesDisplayComponent {
  notes = NOTES;

  showText(text: string) {
    alert(text);
  }
}

