import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesDisplayComponent } from './app/notes-display/notes-display.component';
import { AddNoteComponent } from './app/add-note/add-note.component';
import { NoteDetailComponent } from './app/note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NotesDisplayComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
