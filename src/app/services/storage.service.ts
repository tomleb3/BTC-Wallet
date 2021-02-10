import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public load(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
  }

  public save(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
  }

  public clear(key) {
    localStorage.removeItem(key)
  }
}
