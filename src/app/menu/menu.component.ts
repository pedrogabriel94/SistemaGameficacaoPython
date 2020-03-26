import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  opcoes = [];
  constructor() { }

  ngOnInit(): void {
    this.setOpcoes();
  }

  sair(){
    sessionStorage.setItem("logado", "false");
  }

  setOpcoes(){
    let tipo = sessionStorage.getItem("tipoLogado");
    if(tipo == "aluno"){
      this.opcoes = [
        {hash: "20200325", descricao: "Atividades"}
      ]
    }else{
      this.opcoes = [
        {hash: "20200314", descricao: "Instrutores"},
        {hash: "20200316", descricao: "Alunos"},
        {hash: "20200325", descricao: "Atividades"}
      ]
    }
  }

}
