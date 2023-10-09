import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  link1 = "http://localhost:9001/register";
  link2 = "http://localhost:9001/account";
  link3 = "http://localhost:9001/update";
  link4 = "http://localhost:9001/view";
  constructor(private h1: HttpClient) { }

  insertdata1(data: any) {
    return this.h1.post(this.link1, data);
  }
  logindata1(user: User): Observable<object> {
    return this.h1.post(`${this.link2}`, user);
  }
  updatedata1(data: any) {
    return this.h1.post(this.link3, data);
  }

  viewdata1() {
    return this.h1.get(this.link4);
  }
}
