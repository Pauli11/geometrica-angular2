import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuarioLogado: any;
  
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  loginModel= new User();

  mensagem = ""

  onSubmit(){
    console.log (this.loginModel)

    let erroEncontrado = 0;

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";","="]

    listaPalavras.forEach(palavra => {
      console.log("palavra atual", palavra)

      if(this.loginModel.email.toLowerCase().includes(palavra)) {
        console.log("Palavra encontrada:", palavra)
        this.mensagem = "Dados inválidos: " + palavra;

        erroEncontrado = 1;
      }

    })

    if (erroEncontrado == 0) {
    this.loginService.login(this.loginModel).subscribe ((response)=>{
      this.usuarioLogado = this.router.navigateByUrl('')
      //this.router.navigateByUrl('')
      console.log(this.usuarioLogado)
    }, (respostaErro)=>{
        //console.log(this.mensagem)
        this.mensagem = respostaErro.error
      })      
    }
  }

}    

  //Essa função "onSubmit" é a que faz o evento onSubmit funcionar

