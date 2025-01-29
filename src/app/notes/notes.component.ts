import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NoteComponent} from "./note/note.component";

@Component({
    selector: 'app-notes',
    imports: [
        FormsModule,
        NoteComponent
    ],
    templateUrl: './notes.component.html',
    styleUrl: './notes.component.css'
})

export class NotesComponent {

  notes: NoteComponent[] = [];

  text: string | undefined;
  index: number = -1;

  add() {
    const note = { text: this.text };
    this.notes.push(note);
    this.text = '';
  }

  remove(idx:number) {
    this.notes.splice(idx, 1);
  }

  edit($index: number) {
    this.text = this.notes[$index].text;
    this.index = $index;
  }

  save() {
    this.notes[this.index].text = this.text;
    this.index = -1;
    this.text = '';
  }
}
