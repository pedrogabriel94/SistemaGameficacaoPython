import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../classes/aluno.module'
import { AlunoService } from './aluno.service'
 
@Component({
  selector: 'app-area-aluno',
  templateUrl: './area-aluno.component.html',
  styleUrls: ['./area-aluno.component.css']
})
export class AreaAlunoComponent implements OnInit {

 

  alunos = [];
  aluno: AlunoModel = new AlunoModel();
  titleModal: string = "Adicionar";

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.getAll();
  } 

  abrirModal(){
    this.aluno = {
      nome: null,
      cpf: null,
      senha: null,
      pontos: null,
      presenca: null,
      login: null,
      telefone: null
    };
    this.titleModal = "Adicionar";
  }

  adicionar(){
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

  deletar(id){
      this.alunoService.deletar(id);
  } 

  openModalEditar(i){
    this.titleModal = "Editar";
    this.aluno =  Object.assign({}, i); //Faz uma copia do objeto
  }

  editar(){
    this.alunoService.editar(this.aluno);
    this.getAll();
  }

}
