import { Component } from '@angular/core';

@Component({
  selector: 'app-pip-demo',
  templateUrl: './pip-demo.component.html',
  styleUrl: './pip-demo.component.css'
})
export class PipDemoComponent {

  Fruits=["Apple","Orange","Grape","Mango","Kiwi","Pomegranate"]
  
  jsonData={id:10011, name:{userName:'user1'}}

  presentDate = new Date();
  price : number =20000;

  decimalNum1 : number =8.5432215;
  decimalNum2 : number =5.43;
  decimalNum: number = 0.8178;
  num:number=888;
}
