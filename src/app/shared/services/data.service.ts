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

  public userTemp: any;

  constructor(private httpClient: HttpClient) { }

  getAnagrafica(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:3000/anagrafica');
  }

  saveUser(user: any) {
    const userFormat = {
      name: user.name,
      mail: user.email,
      location: {
        address: user.address
      },
      orders: []
    }
    this.httpClient.post('http://localhost:3000/anagrafica', userFormat).subscribe();
  }

  deleteUser(user: IUser) {
    this.httpClient.delete('http://localhost:3000/anagrafica/' + user.id).subscribe();
  }

  editUser(user: any, id: string) {
    // alert(`UTENTE ${id} ELIMINATO`);
    this.httpClient.delete('http://localhost:3000/anagrafica/' + id).subscribe();
    this.saveUser(user);
  }
}
