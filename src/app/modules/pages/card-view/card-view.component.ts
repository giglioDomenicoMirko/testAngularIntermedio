import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/User';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'gdm-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  anagrafica!: IUser[];
  // anagraficaSubject$!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(`card-view avviato`);
    // this.anagraficaSubject$ = this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);
    this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);

  }

  deleteUser(user: IUser) {
    // alert(`Eliminato ${user.name}`);
    // this.anagraficaSubject$.unsubscribe();
    this.dataService.deleteUser(user);
    // this.anagraficaSubject$ = this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);
    this.ngOnInit();
  }

}
