import { Component, OnInit } from '@angular/core';
import { livros } from 'src/app/models/livros';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private livrosService:LivrosService) { }
    listaLivros =[] as livros[]

  ngOnInit(): void {
    this.carregarLivros()
  }

  carregarLivros(){
    this.livrosService.getLivros().subscribe( (livrosRecebidos:livros[]) => {
      this.listaLivros=livrosRecebidos;
      console.log(this.listaLivros);
    } )
  }
}
