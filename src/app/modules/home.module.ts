import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardViewComponent } from './pages/card-view/card-view.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { NewUserFormComponent } from './pages/new-user-form/new-user-form.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';


@NgModule({
  declarations: [
    CardViewComponent,
    ListViewComponent,
    NewUserFormComponent,
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
