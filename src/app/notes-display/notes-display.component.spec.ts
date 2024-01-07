import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDisplayComponent } from './notes-display.component';

describe('NotesListComponent', () => {
  let component: NotesDisplayComponent;
  let fixture: ComponentFixture<NotesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
