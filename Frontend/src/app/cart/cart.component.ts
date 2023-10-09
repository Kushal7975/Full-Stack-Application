import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private s1: DemoService) { }
  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }

  getCartDetails: any = [];
  value: any;

  CartDetails() {
    if (localStorage.getItem('localCart')) {
      this.value = localStorage.getItem('localCart');
      this.getCartDetails = JSON.parse(this.value);
      console.log(this.getCartDetails);
    }
  }


  total: number = 0;
  loadCart() {
    if (localStorage.getItem('localCart')) {
      let value = localStorage.getItem('localCart')
      this.getCartDetails = JSON.parse(this.value)
      this.total = this.getCartDetails.reduce(function (acc: any, val: any) {
        return acc + (val.pprice * val.pqnt)
      }, 0)
    }
  }

  removeall() {
    alert("All Product removed sucessfully")
    localStorage.removeItem('localCart')
    this.getCartDetails = [];
    this.total = 0;
  }

  remove(getCartDetail: any) {
    alert("Product removed sucessfully")
    if (localStorage.getItem('localCart')) {
      let value = localStorage.getItem('localCart');
      this.getCartDetails = JSON.parse(this.value);
      for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].pid === getCartDetail) {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
        }
      }
    }
  }
}