import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { InstrutorModel } from '../classes/instrutor.module';
import { AlunoModel } from '../classes/aluno.module';
import { InstrutorService } from '../area-instrutor/instrutor.service';
import { AlunoService } from '../area-aluno/aluno.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa =  {tipo: null, login: null, senha: null};
  dadosCorretos = true;
  typeInput = 'password';
  eyeOpen = true;
  viewMenu = new EventEmitter<boolean>();
  instrutores = [];
  alunos = [];

  constructor(private authService: AuthService, private instrutorService: InstrutorService, private alunoService: AlunoService) {
      this.pessoa.tipo = 'aluno';
  }

  ngOnInit(): void {
    this.getUsuarios();
    sessionStorage.setItem('logado', 'false');
    this.viewMenu.emit();
  }

  logar() {
    this.dadosCorretos = this.authService.logar(this.pessoa, this.instrutores, this.alunos);
  }

  verSenha() {
    this.typeInput = 'text';
    this.eyeOpen = false;
  }

  ocultarSenha() {
    this.typeInput = 'password';
    this.eyeOpen = true;
  }

  getUsuarios() {
    this.instrutorService.getAll().subscribe(data => {
      this.instrutores = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as InstrutorModel
        };
      });
    });

    this.alunoService.getAll().subscribe(data => {
      this.alunos = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as AlunoModel
        };
      });
    });
  }

}
