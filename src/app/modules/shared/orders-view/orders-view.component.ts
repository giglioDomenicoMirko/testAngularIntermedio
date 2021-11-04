import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'gdm-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
