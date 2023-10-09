import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  data: any;
  constructor(private s1: DemoService) { }
  viewdata() {
    let res = this.s1.viewdata1();
    res.subscribe((data1) => this.data = data1);
  }

  updatedata(updateform: any) {
    return this.s1.updatedata1(updateform.value).subscribe();
  }

  update() {
    alert("Update Successful");
  }
}
