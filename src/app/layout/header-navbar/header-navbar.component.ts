import { Component, OnInit } from '@angular/core';

import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  cardRoute = '';
  listRoute = '';

  constructor( private view: ViewService ) { }

  ngOnInit(): void {
    if(window.location.pathname === '/home') {
      this.cardRoute = 'bold';
    } else {
      this.listRoute = 'bold';
    }
  }

  viewNewForm() {
    this.view.view();
  }

  changeBold(route: string) {
    switch (route) {
      case 'card':
        this.cardRoute = 'bold';
        this.listRoute = '';
        break;
      case 'list':
        this.listRoute = 'bold';
        this.cardRoute = '';
        break;
    }
  }

}
