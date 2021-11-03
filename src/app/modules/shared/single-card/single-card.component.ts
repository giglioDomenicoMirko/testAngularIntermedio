import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'gdm-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  @Input() user!: IUser;
  @Output() deleted = new EventEmitter;

  contOrders = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadCounterOrders();
  }

  loadCounterOrders() {
    for(let order in this.user.orders) {
      this.contOrders++;
    }
  }

  editUser() {
    alert(`This function is under costruction`);
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }

}
