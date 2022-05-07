import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/usuarios" 

  constructor(private httpClient: HttpClient) { }

  getLogin(): Observable<login[]>{
    return this.httpClient.get<usuarios[]>(this.url)
  }
}
// ****  falta criar a interface do login  com o comando ng generate interface models/login e depois importar o model para cá ***//
