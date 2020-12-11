import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  password: string;
  username: string;

  constructor() { }

  ngOnInit(): void {
  }

  login(value: any) {
    console.log('Log in!');
  }
}
