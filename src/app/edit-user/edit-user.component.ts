import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'api-services/api.service';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: Users = {}
  userId:any;
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data['userid']);
      this.userId = data['userid']
      
    })

    if(this.userId){
      this.api.viewUser(this.userId).subscribe(
        (result:any)=>{
          console.log(result);

          this.user = result

          
        }
      )
    }
  }

  editUser(user:Users){
    this.api.editUser(this.userId, user).subscribe((result:any)=>{
      console.log(result);

      alert('User update successfully')
      this.router.navigateByUrl('')

      
    })

  }

}
