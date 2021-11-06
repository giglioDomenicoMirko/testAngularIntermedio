import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { IUser } from 'src/app/models/User';

import { DataService } from 'src/app/shared/services/data.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  @Input() user!: IUser;
  @Input() view!: string;
  @Output() deleted = new EventEmitter;

  contOrders = 0;

  viewOrders = false;

  constructor(private dataService: DataService, private viewService: ViewService) { }

  ngOnInit(): void {
    /* FUNZIONE DA MODIFICARE PER CARICARE IL CONTATORE */
    for (let order in this.user.orders) {
      this.contOrders++;
    }
  }

  editUser() {
    this.viewService.view();
    this.dataService.userTemp = this.user;
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }

  showOrders() {
    this.viewOrders = true;
  }

  @HostListener('document:keydown.escape')
  unShowOrders() {
    this.viewOrders = false;
  }

}
