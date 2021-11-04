import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userAnagrafica: IUser[] = [];

  private userSubject = new BehaviorSubject<IUser[]>(this.userAnagrafica);
  public user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAnagrafica(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/anagrafica');
  }

  deleteUser(user: IUser) {
    // alert(`DELETE ${user.id} - Operazione momentaneamente bloccata`);
    this.httpClient.delete('http://localhost:3000/anagrafica/' + user.id).subscribe();
  }
}
