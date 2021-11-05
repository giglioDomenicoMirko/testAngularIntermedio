import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { ViewService } from 'src/app/shared/services/view.service';
import { CardViewComponent } from '../../pages/card-view/card-view.component';

@Component({
  selector: 'gdm-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor(private view: ViewService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  saveUser(form: NgForm) {
    this.dataService.saveUser(form.value);
    this.exit();
  }

  @HostListener('document:keydown.escape')
  exit() {
    this.view.exit();
  }
}
