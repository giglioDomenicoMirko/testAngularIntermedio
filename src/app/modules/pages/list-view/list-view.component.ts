import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IUser } from 'src/app/models/User';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'gdm-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit, OnDestroy {

  anagrafica!: IUser[];
  subscriptionOfAnagrafica!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionOfAnagrafica = this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);
  }

  deleteUser(user: IUser) {
    this.dataService.deleteUser(user);
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    this.subscriptionOfAnagrafica.unsubscribe();
  }

}
