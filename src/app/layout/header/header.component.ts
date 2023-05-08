import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public LOGOURL = "../../../assets/hubbec-logo.png";
  public userMenuOptions: boolean = false;

  @Output() newItemEvent = new EventEmitter<any>();
  public user!: Users;
  public userName: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem("user");


    this.user = JSON.parse(String(user));

    //console.log(typeof(this.user));
    this.userName = String(`${this.user.firstname} ${this.user.lastname}`)
  }

  editUser() {
    let u = localStorage.getItem("user");
    this.newItemEvent.emit(u);
    this.closeUserOptions();
  }

  showUserOptions() {
    this.userMenuOptions === false ? this.userMenuOptions = true : this.userMenuOptions = false;
  }

  closeUserOptions() {
    this.userMenuOptions = false;
  }

  navigateToHome() {
    this.route.navigate(['/auth/register']);
  }

}
