import { Injectable } from '@angular/core';
import {Customer} from '../../clientele/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Customer;

  constructor() { }

  loginUser(usernom: string, passCode: string){
    this.currentUser = {
      id: 1,
      fullName: 'Elvis Gene',
      username: usernom,
      password: passCode,
      phone: '0622093826',
      address: 'Cape Town',
      email: 'client@email.com'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
