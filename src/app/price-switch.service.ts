import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceSwitchService {
  private isReducedSubject = new BehaviorSubject<boolean>(false);
  isReduced$ = this.isReducedSubject.asObservable();

  setReduced(isReduced: boolean) {
    this.isReducedSubject.next(isReduced);
  }
}