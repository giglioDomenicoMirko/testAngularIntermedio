import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newUserFormView!: boolean;

  constructor(private view: ViewService) { }

  ngOnInit(): void {
    this.view.subscribeViewFlag().subscribe(data => {
      this.newUserFormView = data;
    })
  }

}
