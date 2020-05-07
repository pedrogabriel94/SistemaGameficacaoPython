import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../classes/aluno.module';
import { AlunoService } from './aluno.service';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-area-aluno',
  templateUrl: './area-aluno.component.html',
  styleUrls: ['./area-aluno.component.css'],
})

export class AreaAlunoComponent implements OnInit {
  idDeletar: string;
  alunos = [];
  aluno: AlunoModel = new AlunoModel();
  titleModal: string = "Adicionar";

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAll();
  }

  paginaAtual = 1;

  abrirModal() {
    this.aluno = {
      nome: null,
      cpf: null,
      senha: null,
      login: null,
      telefone: null
    };
    this.titleModal = "Adicionar";
  }

  formataCPF(cpf: String) {
    var cpfFinal = cpf[0] + cpf[1] + cpf[2] + '.' + cpf[3] + cpf[4] + cpf[5] + '.' + cpf[6] + cpf[7] + cpf[8] + '-' + cpf[9] + cpf[10]
    return cpfFinal
  }
  formataTelefone(tel: String) {
    var telFinal = '(' + tel[0] + tel[1] + ')' + tel[2] + tel[3] + tel[4] + tel[5] + tel[6] + '-' + tel[7] + tel[8] + tel[8] + tel[10]
    return telFinal
  }
  adicionar() {
    var cpfCerto = this.formataCPF(this.aluno.cpf)
    this.aluno.cpf = cpfCerto
    var telFormatado = this.formataTelefone(this.aluno.telefone)
    this.aluno.telefone = telFormatado
    this.alunoService.adicionar(this.aluno);
  }

  getAll() {
    this.alunoService.getAll().subscribe(data => {
      this.alunos = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as AlunoModel
        };

      })
    });
  }

  openModalDeletar(id) {
    this.idDeletar = id
  }

  deletar(id) {
    this.alunoService.deletar(id);
  }

  openModalEditar(i) {
    this.titleModal = "Editar";
    this.aluno = Object.assign({}, i); //Faz uma copia do objeto
  }

  editar() {
    this.alunoService.editar(this.aluno);
    this.getAll();
  }

}
