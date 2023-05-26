import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/models/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  //API call for get all Users

  getAllUsers():Observable<Users>{

    return this.http.get(this.baseUrl)
  }

  //API Call for add contact

  addUsers(userBody:any){
    console.log(userBody);
    return this.http.post(this.baseUrl,userBody)
    
    
    
    
  }

  //EDIT

  editUser(id:any,user:any){
    return this.http.put('http://localhost:3000/users/'+id,user)
  }


  viewUser(userId:string){
    return this.http.get(`${this.baseUrl}/${userId}`)
 
   }


   // Delete USER
   deleteUser(id:any){
    return this.http.delete('http://localhost:3000/users/'+id)
   }

}
