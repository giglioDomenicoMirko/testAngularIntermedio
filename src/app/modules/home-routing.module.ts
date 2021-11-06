import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardViewComponent } from './pages/card-view/card-view.component';
import { ListViewComponent } from './pages/list-view/list-view.component';

const routes: Routes = [
  { path: 'home', component: CardViewComponent },
  { path: 'list', component: ListViewComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
