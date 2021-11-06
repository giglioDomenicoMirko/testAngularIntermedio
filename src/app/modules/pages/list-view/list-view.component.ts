import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'gdm-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  anagrafica!: IUser[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);
  }

  deleteUser(user: IUser) {
    this.dataService.deleteUser(user);
    this.ngOnInit();
  }

}
