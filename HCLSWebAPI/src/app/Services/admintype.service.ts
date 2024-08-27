import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminType } from '../../Models/IAdminType';

@Injectable({
  providedIn: 'root'
})
export class AdmintypeService  {

  HostURl:string="http://localhost:7865";
  AdminTypewebPath:string="/api/AdminType/";

  constructor(private httpser:HttpClient) { }


  GetAdmintypes():Observable<IAdminType[]>{
   return this.httpser.get<IAdminType[]>(this.HostURl+this.AdminTypewebPath+"AllAdminTypes");

  }
}