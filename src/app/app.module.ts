import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home.module';

import { HeaderNavbarComponent } from './layout/header-navbar/header-navbar.component';
import { HomeComponent } from './modules/home/home.component';
import { NewUserFormComponent } from './modules/shared/new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HomeComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
