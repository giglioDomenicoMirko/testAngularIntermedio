import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser, User } from 'src/app/models/User';

import { DataService } from 'src/app/shared/services/data.service';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor(private view: ViewService, private dataService: DataService) { }

  user: User = User.Build({} as IUser);

  editUserFlag = 0;

  ngOnInit(): void {
    if(this.dataService.userTemp != undefined) {
      this.user = this.dataService.userTemp;
      this.editUserFlag = 1;
    }
  }

  @HostListener('document:keydown.enter')
  saveUser(form: NgForm) {
    if(this.editUserFlag === 1){
      this.dataService.editUser(this.user);
      this.editUserFlag = 0;
    } else {
      this.dataService.saveUser(this.user)
    }
    this.exit();
  }

  @HostListener('document:keydown.escape')
  exit() {
    this.view.exit();
  }
}
