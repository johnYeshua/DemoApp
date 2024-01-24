import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  Employee =[
    {id:10011,name:"Vijay",salary:25000},
    {id:10012,name:"Anandh",salary:32000},
    {id:10013,name:"Madhu",salary:38000},
    {id:10014,name:"Geetha",salary:29000}
  ]

  show:boolean=true;

  Result:boolean=true;

  isLogIn : boolean =false;
  isLogOut : boolean =true;

  loginName="user";

  constructor() { }

  ngOnInit(): void {
  }

}