import { Component, HostListener, OnInit } from '@angular/core';
import { ViewService } from 'src/app/shared/services/view.service';

@Component({
  selector: 'gdm-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  constructor(private view: ViewService) { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape')
  exit() {
    this.view.exit();

  }


  /* funzione momentanea */
  alert(text: string) {
    alert(text);
  }

}
