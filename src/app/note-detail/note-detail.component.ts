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

  // Inject ActivatedRoute to get the current route, extract its ID, and find the corresponding note
export class NoteDetailComponent {
    currentRoute = inject(ActivatedRoute);
    id = Number(this.currentRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((note) => note.id === this.id);
}
