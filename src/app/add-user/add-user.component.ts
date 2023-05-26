import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'api-services/api.service';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: Users = {}




  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) {

  }
  ngOnInit(): void {

  }

  addUserForm = this.fb.group({
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    dob: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9@]*')]],
    salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    gender: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]]
  })


  // addUser(){
  //   this.api.addUsers(this.user).subscribe((data:any)=>{
  //     console.log(this.user);

  //     console.log(data);
  //     // 
  //     alert('User Added Successfully')

  //     this.router.navigateByUrl('')
  //   })
  // }

  addUser() {

    let userid = this.addUserForm.value.userid
    let username = this.addUserForm.value.username
    let dob = this.addUserForm.value.dob
    let email = this.addUserForm.value.email
    let salary = this.addUserForm.value.salary
    let gender = this.addUserForm.value.gender

    if (this.addUserForm.valid) {
      this.api.addUsers(this.user).subscribe((result: any) => {
        console.log(result);
        
        alert('user added success')
        this.router.navigateByUrl('')

      })
    }
    else {
      alert("invalid form")
    }
  }




}
