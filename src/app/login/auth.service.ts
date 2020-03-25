import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private autenticado: boolean;
  viewMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(pessoa){
    let page = pessoa.tipo == "aluno"? "20200316": "20200314";
    sessionStorage.setItem("tipoLogado", pessoa.tipo);
    if((pessoa.login == "pedro" && pessoa.senha == "123") || this.autenticado){
      this.router.navigate([page]);
      this.autenticado = true;
      sessionStorage.setItem("logado", "true");
      this.viewMenu.emit();
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

}
