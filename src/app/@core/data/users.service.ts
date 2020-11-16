
import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken } from '@nebular/auth';

@Injectable()
export class UserService {

  private user = {};

  constructor() {
  }

  getUser(): Observable<any> {
    return observableOf(this.user);
  }
}
