import { categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  categorias: categoria[] = []

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll()
  }

   findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categorias = resposta
    })
   }
 

}
