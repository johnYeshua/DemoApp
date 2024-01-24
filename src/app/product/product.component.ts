import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  constructor(){

  }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

myColor = 'pink';
MyCSSClassRed = "red";
myCssClassBlue = "blue";

UserName: string = "nor";

product_id = 200055;
name = "fruits"
price = 3000;

showdata(){
  console.log("product id : " + this.product_id);
  console.log("name : " + this.name);
  console.log("price : " + this.price);
}
}
