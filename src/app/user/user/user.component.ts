import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userDetails:FormGroup
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.userDetails=this.fb.group({
      firstname:[''],
      lastname:[''],
      country:[''],
      Email:[''],
      Password:[''],
      cfmPassword:[''],
    })
  }

  savedata(data){
    console.log(data)
  }

}
