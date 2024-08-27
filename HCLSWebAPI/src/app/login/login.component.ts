import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit{

  constructor(private route:Router){}

  ngOnInit(): void {
    
  }

  btn_Login():void{
    //check For user credentials

    window.sessionStorage.setItem("Login","Sindhu");
    this.route.navigate(["manageradmin"]);
  }

}
