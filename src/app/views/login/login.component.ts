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
  userModel= new User("", "")
  onSubmit(){
    console.log(this.userModel)
  }
  //Essa função "onSubmit" é a que faz o evento onSubmit funcionar
}
