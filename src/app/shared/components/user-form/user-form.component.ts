import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import * as moment from 'moment';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() data!: Users;

  @Input() isRegister!: boolean;

  @Input() isEdit!: boolean;

  @Input() isVerify!: boolean;

  public showCamera: boolean;

  public formExtended!: boolean;
  public cssBoxClass: string = '';

  private user = new Users();

  public dateBirthdate: string = '';

  public dateExpeditionDate: string = '';

  constructor(private route: Router, private authService: AuthService, private userService: UsersService, public fb: FormBuilder) {
    this.formExtended = false;
    this.showCamera = false;
  }

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.minLength(15),
      Validators.maxLength(100)
    ]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z \s]*'),
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z \s]*'),
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    documentType: new FormControl('', [
      Validators.required
    ]),
    documentNumber: new FormControl('', [
      Validators.pattern('[0-9]*'),
      Validators.minLength(5),
      Validators.maxLength(10),
      Validators.required
    ]),
    phoneNumber: new FormControl('', [
      Validators.pattern('[0-9]*'),
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.required
    ]),
    country: new FormControl('', [
      Validators.pattern('[a-zA-Z 0-9]*'),
    ]),
    city: new FormControl('', [
      Validators.pattern('[a-zA-Z 0-9 ]*'),
    ]),
    address: new FormControl('', [
      Validators.pattern('[a-zA-Z 0-9 ]*'),
    ]),

  });

  ngOnInit(): void {
    this.setDataToEdit();


    if (this.isEdit === true || this.isVerify === true) {
      this.cssBoxClass = 'boxEdit';
    } else {
      this.cssBoxClass = 'boxRegister';
    }
  }

  goLogin() {
    this.route.navigate(['/auth/login']);
  }

  getBirthdate(date: any) {
    let dateFormat = moment(date).format('YYYY-MM-DD');
    this.dateBirthdate = dateFormat;

  }

  getExpeditionDate(date: any) {
    let dateFormat = moment(date).format('YYYY-MM-DD');
    this.dateExpeditionDate = dateFormat;
  }

  async goDashboard() {
    this.user = this.userForm.value;
    this.user.birthdate = this.dateBirthdate;
    this.user.expeditionDate = this.dateExpeditionDate;

    this.authService.addUser(this.user).subscribe(data => {
      this.assingSession(data);
      this.route.navigate(['/features/dashboard']);
    });
  }

  assingSession(user: any) {
    let u = JSON.stringify(user)

    localStorage.setItem("user", u);
  }


  updateUser() {
    this.data.birthdate = this.dateBirthdate;
    this.data.expeditionDate = this.dateExpeditionDate;
    this.data.country = this.userForm.value.country;
    this.data.city = this.userForm.value.city;
    this.data.address = this.userForm.value.address;

    this.userService.updateUser(this.data).subscribe();
  }

  async setDataToEdit() {
    if (this.isVerify) {

      this.userForm.setValue({
        email: this.data.email,
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        documentType: this.data.documentType,
        documentNumber: this.data.documentNumber,
        phoneNumber: this.data.phoneNumber,
        country: '',
        city: '',
        address: ''
      });
    } else if (this.isEdit) {
      this.userForm.setValue({
        email: this.data.email,
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        documentType: this.data.documentType,
        documentNumber: this.data.documentNumber,
        phoneNumber: this.data.phoneNumber,
        country: this.data.country,
        city: this.data.city,
        address: this.data.address
      });
    }

  }

  fillForm() {
    if (this.isRegister) {
      this.userForm.setValue({
        firstname: 'Jeisson',
        lastname: 'Lenis Marulanda',
        phoneNumber: '3173158811',
        email: 'jlenism@gmail.com',
        documentType: 'CC',
        documentNumber: '1113654486',
        country: '',
        city: '',
        address: ''
      });
    } else if (this.isVerify) {
      this.userForm.setValue({
        country: '1113654486',
        city: '1991-17-11',
        address: '2009-29-12'
      });
    }
  }
}
