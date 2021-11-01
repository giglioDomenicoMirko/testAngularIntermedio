import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderNavbarComponent } from './layout/header-navbar/header-navbar.component';

import { CardViewComponent } from './modules/pages/card-view/card-view.component';
import { ListViewComponent } from './modules/pages/list-view/list-view.component';
import { NewUserFormComponent } from './modules/pages/new-user-form/new-user-form.component';
import { OrdersListComponent } from './modules/pages/orders-list/orders-list.component';

// MODULI
import { HomeModule } from './modules/home.module';

// COMPONENTI
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HomeComponent,
    // CardViewComponent,
    // ListViewComponent,
    // NewUserFormComponent,
    // OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
