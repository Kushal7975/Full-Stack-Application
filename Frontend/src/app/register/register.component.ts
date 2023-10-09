import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  email: string = '';
  password: string = '';
  dpassword: string = '';
  location: string = '';
  pincode: string = '';

  constructor(private s1: DemoService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  insertdata(insertform: any) {
    return this.s1.insertdata1(insertform.value).subscribe();
  }
  goback() {
    alert('Data submitted successfully')
  }



  submit(form: any) {
    if (form.valid) {
      // Your form is valid, proceed with data insertion
      alert('Form is valid. Insert data into the database.');
    } else {
      // Form is not valid, display an error or take appropriate action
      alert('Form is invalid. Please fill in required fields.');
    }
  }
}
