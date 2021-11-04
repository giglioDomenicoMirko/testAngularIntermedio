import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/User';

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

  showOrders() {
    this.viewOrders = true;
  }

  unShowOrders() {
    this.viewOrders = false;
  }

}
