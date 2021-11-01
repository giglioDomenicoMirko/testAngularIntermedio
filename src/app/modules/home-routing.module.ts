import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardViewComponent } from './pages/card-view/card-view.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { NewUserFormComponent } from './pages/new-user-form/new-user-form.component';
import { OrdersListComponent } from './pages/orders-list/orders-list.component';

const routes: Routes = [
  { path: 'home', component: CardViewComponent },
  { path: 'list', component: ListViewComponent },
  { path: 'new_user', component: NewUserFormComponent },
  { path: 'order_list', component: OrdersListComponent },
  { path: '**', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
