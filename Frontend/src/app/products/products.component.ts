import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  itemsCart: any = [];
  constructor() {
  }
  products = [
    { pid: "1", pname: "Kanjivaram Sarees", pimg: "./assets/product1.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "2", pname: "Kanjivaram Sarees", pimg: "./assets/product2.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "3", pname: "Kanjivaram Sarees", pimg: "./assets/product3.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "4", pname: "Kanjivaram Sarees", pimg: "./assets/product4.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "5", pname: "Kanjivaram Sarees", pimg: "./assets/product1.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "6", pname: "Kanjivaram Sarees", pimg: "./assets/product2.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "7", pname: "Kanjivaram Sarees", pimg: "./assets/product3.jpg", pprice: 14000.00, pqnt: 1 },
    { pid: "8", pname: "Kanjivaram Sarees", pimg: "./assets/product4.jpg", pprice: 14000.00, pqnt: 1 },
  ]

  inc(product: any) {
    // console.log(product.pqnt)
    if (product.pqnt != 5) {
      product.pqnt += 1;
    }

  }

  dec(product: any) {
    if (product.pqnt != 1) {
      product.pqnt -= 1;
    }
  }

  addCart(category: any) {
    alert("Product added successfully");
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeData: any = [];
      storeData.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeData));
    }
    else {
      var id = category.pid;
      let index: number = -1;
      var value: any = localStorage.getItem('localCart')
      this.itemsCart = JSON.parse(value)
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].pid)) {
          this.itemsCart[i].pqnt = category.pqnt;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }

    }

  }
}
