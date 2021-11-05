import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private newUserFormViewObservable = new BehaviorSubject<boolean>(false);
  public newuserFormFlag$ = this.newUserFormViewObservable.asObservable();

  constructor() { }

  subscribeViewFlag(): Observable<boolean> {
    return this.newuserFormFlag$;
  }

  view() {
    this.newUserFormViewObservable.next(true);
  }

  exit() {
    this.newUserFormViewObservable.next(false);
  }
}
