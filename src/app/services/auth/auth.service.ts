import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Role } from '../../_models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
   }
  doLogin(email, password) {
    var data = {
      'username': email,
      'password': password
    }
    axios.post('http://103.214.233.141:3003/v1/auths/users', data)
    .then( res => {
      console.log(res);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('type', res.data.user.users_permission.type);
      localStorage.setItem('userdata', JSON.stringify(res.data.user));
      this.data = {
        'role': res.data.user.users_permission.type
      };
      localStorage.setItem('currentUser', JSON.stringify(this.data));
      this.currentUserSubject.next(this.data);
      // return res;
      // set a key/valu
      var str = res.data.user.users_permission.name;
      str = str.replace(/ +/g, '');
      console.log(str);
      if ( res.data.user.users_permission.type == 'SPRADM') {

      } else if (res.data.user.users_permission.type == 'OADM') {

      } else if (res.data.user.users_permission.type == 'RADM') {

      } else {
        this.router.navigate(['/dashboard/' + str + '']);
      }
     
    })
    .catch( err => {

        console.log(err);
  });
  }
}
