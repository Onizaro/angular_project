import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './lesson-detail-page.component.html',
  styleUrls: ['./lesson-detail-page.component.css']
})
export class LessonDetailPageComponent {
  readonly initialId: number; 
  id: number | undefined; 

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // Obtenir l'ID initial depuis le snapshot
    this.initialId = +activatedRoute.snapshot.params['id'];
    console.log('initialId:', this.initialId);

    // S'abonner aux changements des paramètres dynamiques
    activatedRoute.params.subscribe(currParams => {
      this.id = +currParams['id'];
      console.log('id:', this.id);
    });
  }

  onClickGoNextPage() {
    const nextId = this.id ? this.id + 1 : 1;
    this.router.navigate(['/lesson', nextId]);
  }
  
  onClickGoPreviousPage() {
    const prevId = this.id && this.id > 1 ? this.id - 1 : 1; 
    this.router.navigate(['/lesson', prevId]);
  }
}
