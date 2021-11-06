import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gdm-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  @Input() orders!: any;
  @Output() exitOrders = new EventEmitter();

  totalPrice = 0;

  constructor() { }

  ngOnInit(): void {
    for(let order of this.orders){
      this.totalPrice += order.quantity * order.product.price;
    }
  }

  exitOrderPage() {
    this.exitOrders.emit();
  }

}
