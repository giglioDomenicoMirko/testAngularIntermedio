import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(private view: ViewService) { }

  ngOnInit(): void { }

  viewNewForm() {
    this.view.view();
  }

}
