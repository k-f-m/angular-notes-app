import { Component, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})

export class NoteDetailComponent {
    // Inject ActivatedRoute to get the current route, extract its ID, and find the corresponding note
    currentRoute = inject(ActivatedRoute);
    id = Number(this.currentRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((note) => note.id === this.id);

    onDeleteNote() {
      if (this.note != undefined) {
        const index = NOTES.indexOf(this.note, 0);
        NOTES.splice(index, 1);
      }
    }
}
