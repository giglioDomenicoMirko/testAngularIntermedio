import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'gdm-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  anagrafica!: IUser[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAnagrafica().subscribe(data => this.anagrafica = data);
  }

}
