import { Component, OnInit, EventEmitter } from '@angular/core';
import { PessoaModel } from '../classes/aluno.module';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa =  {tipo: null, login: null, senha: null};
  dadosCorretos: boolean = true;
  typeInput: string = "password";
  eyeOpen: boolean = true;
  viewMenu = new EventEmitter<boolean>();


  constructor(private authService: AuthService) { 
      this.pessoa.tipo = "aluno";
  }

  ngOnInit(): void {
    sessionStorage.setItem("logado", "false");
    this.viewMenu.emit();
  }

  logar(){
    this.dadosCorretos = this.authService.logar(this.pessoa);
  }

  verSenha(){
    this.typeInput = "text";
    this.eyeOpen = false;
  }

  ocultarSenha(){
    this.typeInput = "password";
    this.eyeOpen = true;
  }

}
