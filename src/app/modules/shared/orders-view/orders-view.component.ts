import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { IOrder } from 'src/app/models/User';

@Component({
  selector: 'gdm-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  @Input() orders!: IOrder[];

  @Output() exitOrders = new EventEmitter();

  totalPrice = 0;

  constructor() { }

  ngOnInit(): void {
    for(let order of this.orders){
      this.totalPrice += order.quantity * order.product.price;
    }
  }

  @HostListener('document:keydown.escape')
  exitOrderPage() {
    this.exitOrders.emit();
  }

}
