import { Injectable } from '@angular/core';

const STORAGE_KEY = 'lesson-app:lastSessionId';

interface StoredInfo {
  lastLessonId?: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private _lastLessonId: number | null = null;

  // Le getter et setter permettent de charger et sauvegarder la donnée dans localStorage
  get lastLessonId(): number | null {
    return this._lastLessonId;
  }

  set lastLessonId(p: number | null) {
    this._lastLessonId = p;
    this.saveInfoToLocalStorage(); // Sauvegarder chaque modification dans localStorage
  }

  constructor() {
    const storedInfo = this.loadInfoFromLocalStorage();
    this._lastLessonId = storedInfo.lastLessonId || null;
  }

  // Fonction pour charger les données depuis localStorage
  loadInfoFromLocalStorage(): StoredInfo {
    const storedJson = window.localStorage.getItem(STORAGE_KEY);
    let res = storedJson ? JSON.parse(storedJson) : { lastLessonId: null };
    console.log('Reading localStorage item ' + STORAGE_KEY, res);
    return res;
  }

  // Fonction pour sauvegarder les données dans localStorage
  saveInfoToLocalStorage(): void {
    const info: StoredInfo = { lastLessonId: this._lastLessonId };
    const json = JSON.stringify(info);
    console.log('Writing localStorage item ' + STORAGE_KEY, info);
    window.localStorage.setItem(STORAGE_KEY, json);
  }
}