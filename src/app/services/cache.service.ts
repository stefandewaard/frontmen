import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: Map<string, any> = new Map<string, any>();

  get(key: string): any {
   return JSON.parse(localStorage.getItem(key));
   //return this.cache.get(key);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    //this.cache.set(key, value);
  }

  has(key: string): boolean {
    return key in localStorage;
    //return this.cache.has(key);
  }

  remove(key:string){
    localStorage.removeItem(key);
   // this.cache.delete(key);
  }

  clear(){
    localStorage.clear();
    //this.cache.clear();
  }

}
