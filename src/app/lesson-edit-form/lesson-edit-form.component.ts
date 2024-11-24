import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserSettingsService } from '../user-settings.service';
import { LessonPackage } from './lesson-package.model';  // Assurez-vous d'importer votre modèle
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-lesson-edit-form',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, CommonModule],  // Importation du module FormsModule pour utiliser ngModel
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {

  lessonForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.lessonForm = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      level: [''],
      prerequisite: [''],
      tags: [''],
      copyright: ['']
    });
  }
  onSubmit() {
    if (this.lessonForm.valid) {
      const formData = this.lessonForm.value;
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form is invalid. Please check the required fields.');
    }
  }


  // Déclarer le modèle qui sera lié aux champs de formulaire
  model: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: 1,
    prerequisite: [],
    tags: [],
    copyright: ''
  };

  // Méthode de soumission du formulaire
  onClickSubmit() {
    console.log('Form values to save to server', this.model);
    // Vous pouvez envoyer `this.model` au serveur via un service
  }
}
