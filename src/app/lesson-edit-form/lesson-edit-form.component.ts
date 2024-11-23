import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [],
  templateUrl: './lesson-edit-form.component.html',
  styleUrl: './lesson-edit-form.component.css'
})

export class LessonEditFormComponent {

  constructor(private router: Router) {}
  onClickSubmit() {
    // could execute code (send save request to server)... then navigate
    this.router.navigate(['lesson-list']).then(res => {})
  }

}
