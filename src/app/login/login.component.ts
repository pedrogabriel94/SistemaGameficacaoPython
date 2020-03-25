import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../classes/pessoa.module';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel();
  dadosCorretos: boolean = true;
  typeInput: string = "password";
  eyeOpen: boolean = true;


  constructor(private authService: AuthService) { 
      this.pessoa.tipo = "aluno";
  }

  ngOnInit(): void {
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
