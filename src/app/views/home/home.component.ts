import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/models/livros';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private livrosService:LivrosService) { }
    listaLivros =[] as Livros[]

  ngOnInit(): void {
    this.carregarLivros()
  }

  carregarLivros(){
    this.livrosService.getLivros().subscribe( (livrosRecebidos:Livros[]) => {
      this.listaLivros=livrosRecebidos;
      console.log(this.listaLivros);
    } )
  }
}
