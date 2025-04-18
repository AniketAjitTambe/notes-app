import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  generateId(type: string) {
    let idCode = type === 'User' ? 'u' : type === 'Note' ? 'n' : 'i';
    return idCode + Math.random().toString(16).slice(2);
  }
}
