import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { IUser } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userAnagrafica: IUser[] = [];

  private userSubject = new BehaviorSubject<IUser[]>(this.userAnagrafica);
  public user$ = this.userSubject.asObservable();

  public userTemp!: IUser;

  constructor(private httpClient: HttpClient) { }

  getAnagrafica(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/anagrafica');
  }

  saveUser(user: IUser) {
    this.httpClient.post('http://localhost:3000/anagrafica', user).subscribe();
  }

  deleteUser(user: IUser) {
    this.httpClient.delete('http://localhost:3000/anagrafica/' + user.id).subscribe();
  }

  editUser(user: IUser) {
    this.httpClient.delete('http://localhost:3000/anagrafica/' + user.id).subscribe();
    this.saveUser(user);
  }
}
