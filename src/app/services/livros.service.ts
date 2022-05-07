import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livros } from '../models/livros';

@Injectable({
  providedIn: 'root'
})
//Classe versus interface: a classe contém código enquanto interface é apenas uma referência, não contem nenhum tipo de código. Como no caso não vamos montar código para a noticia, apenas precisamos de uma interface para definir pro angular de onde pega a noticia. Dai para criar a interface, geramos uma interface dentro de models//
export class LivrosService {
  url="http://localhost:3000/livros"

  constructor(private httpClient:HttpClient) { }
  getLivros(): Observable<Livros[]> {
    return this.httpClient.get<Livros[]>(this.url)
  }
}
