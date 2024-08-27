import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../../Models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  HostUrl:string="http://localhost:7865";
  AdminWebApiPath:string="/api/Admin/";

  constructor(private httpser:HttpClient) { }

  InsertAdmin(adm:IAdmin):Observable<number>{ 

  return this.httpser.post<number>(this.HostUrl+this.AdminWebApiPath+"AdminRegistration",adm)

  }
}