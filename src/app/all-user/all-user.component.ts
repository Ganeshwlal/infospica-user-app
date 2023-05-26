import { Component, OnInit } from '@angular/core';
import { ApiService } from 'api-services/api.service';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  allUsers:Users[]=[]
  // allUsers=[]

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.api.getAllUsers().subscribe((data:any)=>{

      this.allUsers=data

    })
  }


  //DELETE

  deleteUser(userId:any){
    this.api.deleteUser(userId).subscribe((result:any)=>{
      console.log(result);
      this.getAllUser()
      
    })

  }

}
