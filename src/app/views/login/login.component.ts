import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  loginModel= new User();

  mensagem = ""

  onSubmit(){
    console.log (this.loginModel)

    this.loginService.login(this.loginModel).subscribe ((response)=>{
      this.router.navigateByUrl('')
    }, (respostaErro)=>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)
        

    })

  }
  //Essa função "onSubmit" é a que faz o evento onSubmit funcionar
}
