import { Component, OnInit } from '@angular/core';
import { IAdminType } from '../../Models/IAdminType';
import { AdmintypeService } from '../Services/admintype.service';
import {error}from 'console';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { IAdmin } from '../../Models/IAdmin';

@Component({
  selector: 'app-manageraladminregistration',
  templateUrl: './manageraladminregistration.component.html',
  styleUrl: './manageraladminregistration.component.less'
})
export class ManageraladminregistrationComponent implements OnInit{
  AdmiTypeList!:IAdminType[];
  Adminn:IAdmin;

  constructor(private adminty:AdmintypeService,private admins:AdminService,private router:Router){
    this.Adminn={adminId:0,aName:"",gender:"",password:"",email:"",address:"",active:true,adminTypeId:0}
  }

  ngOnInit(): void {
    this.adminty.GetAdmintypes().subscribe(data=>{
      this.AdmiTypeList=data;
    },error=>alert(error));
  }

  btn_Register():void{
    this.Adminn.adminTypeId=parseInt(this.Adminn.adminTypeId.toString());

    this.admins.InsertAdmin(this.Adminn).subscribe(data=>{
      alert(data+"Record Insered Succesfully");
      this.router.navigate(["login"]);
    },error=>alert(error));
  }

  btn_Cancel():void{
    this.router.navigate(["home"]);
  }

}