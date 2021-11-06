import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { CardViewComponent } from './pages/card-view/card-view.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { SingleCardComponent } from './shared/single-card/single-card.component';
import { OrdersViewComponent } from './shared/orders-view/orders-view.component';

@NgModule({
  declarations: [
    CardViewComponent,
    ListViewComponent,
    SingleCardComponent,
    OrdersViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
