import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  instrutores = [];
  alunos = [];
  private autenticado: boolean;
  viewMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(pessoa, instrutores, alunos){
    let page = pessoa.tipo == "aluno"? "20200325": "20200314";
    let array = pessoa.tipo == "aluno"? alunos: instrutores;
    sessionStorage.setItem("tipoLogado", pessoa.tipo);
    if(this.validaUsuario(array, pessoa) || this.autenticado){
      this.router.navigate([page]);
      this.autenticado = true;
      sessionStorage.setItem("logado", "true");
      this.viewMenu.emit();
      console.table("Instrutores", instrutores);
      console.table("Alunos", alunos);
      return true;
    }else{
      this.autenticado = false;
      this.viewMenu.emit();
      return false;
    }
  }

  usuarioEstaLogado(){
    return sessionStorage.getItem("logado");
  }

  validaUsuario(array, pessoa){
    let aux = 0;
    array.forEach(p => {
      if((p.login == pessoa.login) && (p.senha == pessoa.senha)){
        aux++;
      }
    });
    return aux;
  }

}
