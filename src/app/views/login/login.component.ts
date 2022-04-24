import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModel= new User("paula@email.com","123testando")
  onSubmit(){
    console.log(this.userModel)
  }
}
