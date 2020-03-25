import { Injectable, EventEmitter } from '@angular/core';
import { PessoaModel } from '../classes/pessoa.module';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado: boolean;
  viewMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(pessoa: PessoaModel){
    let page = pessoa.tipo == "aluno"? "20200316": "20200314";
    if((pessoa.nome == "pedro" && pessoa.senha == "123") || this.autenticado){
      this.router.navigate([page]);
      this.autenticado = true;
      localStorage.setItem("logado", "true");
      this.viewMenu.emit();
      return true;
    }else{
      this.autenticado = false;
      this.viewMenu.emit();
      return false;
    }
  }

  usuarioEstaLogado(){
    return localStorage.getItem("logado");
  }

}
