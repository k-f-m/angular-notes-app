import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
/**
 * Inject Router which provides navigation and URL manipulation capabilities as a dependency into the class.
 *
 * The FormGroup class is used to create a top-level FormGroup instance and bind it to a form to track
 * aggregate form value and validation status.
 *
 * The FormControl class is used to track the value and validation status of an individual form control.
 */
export class AddNoteComponent {
  router = inject(Router);

  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });
  /**
   * Add a new note to the NOTES array.
   *
   * If the noteForm instance is valid, the function generates a new id for the note by finding the maximum
   * id value in the NOTES array and incrementing it by 1.
   *
   * The function then adds the new note to the beginning of the NOTES array using the unshift() method.
   *
   * The reset() method clears the form input fields and make it ready for the next note to be added.
   *
   * Finally, after adding a new note, the list of notes is loaded.
   */
  addNote() {
  const title = this.noteForm.value.title ?? '';
  const text = this.noteForm.value.text ?? '';

  if (this.noteForm.valid) {
    const ids = NOTES.map((note) => note.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    const newNote = {
      id: maxId + 1,
      title,
      text,
    };
    NOTES.unshift(newNote);
    this.noteForm.reset();

    this.router.navigateByUrl('/');
  }
  }
}
