import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesDisplayComponent } from './app/notes-display/notes-display.component';
import { AddNoteComponent } from './app/add-note/add-note.component';

const routes: Routes = [
  { path: '', component: NotesDisplayComponent },
  { path: 'new', component: AddNoteComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
