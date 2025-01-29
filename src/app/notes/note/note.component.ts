import { Component } from '@angular/core';
import {Input} from "@angular/core";

@Component({
    selector: 'app-note',
    imports: [],
    templateUrl: './note.component.html',
    styleUrl: './note.component.css'
})
export class NoteComponent {

  @Input() text: string | undefined = '';

}
