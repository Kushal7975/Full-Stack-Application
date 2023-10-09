import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private s1: DemoService, private router: Router) { }

  user: User = new User();

  loginform = new FormGroup({
    useremail: new FormControl('', [Validators.required]),
    userpwsd: new FormControl('', [Validators.required]),
  })

  link: string = "";
  logindata() {

    this.s1.logindata1(this.user).subscribe(
      data => { this.link = "/account", alert("login Successful"), this.router.navigate(["/signin"]) },
      error => alert("invalid email/password")
    );
  }
  get useremail() {
    return this.loginform.get('useremail');
  }
  get userpwsd() {
    return this.loginform.get('userpwsd');
  }

}
