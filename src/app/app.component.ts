import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NotesComponent} from "./notes/notes.component";

@Component({
    selector: 'app-root',
    imports: [FormsModule, NotesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes-app';
}
