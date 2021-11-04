import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOrder } from 'src/app/models/Order';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'gdm-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  @Input() orders!: any;
  @Output() exitOrders = new EventEmitter();

  

  constructor() { }

  ngOnInit(): void {
  }

  exitOrderPage() {
    this.exitOrders.emit();
  }

}
