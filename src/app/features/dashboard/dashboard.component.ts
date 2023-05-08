import { Component,  } from '@angular/core';
import { Users } from 'src/app/core/models/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent{

  public user!: Users;
  public showForm: boolean = false;

  userEvent(e: any) {
    //console.log(e);
    this.user = JSON.parse(e);
    //console.log(this.user)
    this.showForm = true;
  }

}
