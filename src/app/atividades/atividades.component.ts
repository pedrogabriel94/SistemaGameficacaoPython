import { Component, OnInit } from '@angular/core';
import {AtividadeService} from './atividades.service';
import { AtividadeModel } from '../classes/atividade.module';


@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})

 
export class AtividadesComponent implements OnInit {

  atividades = [];
  atividade: AtividadeModel = new AtividadeModel();
  titleModal: string = "Adicionar";
  idDeletar: string;

  constructor(private AtividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  abrirModal(){
    this.atividade = {
      nome: null,
      descricao: null,
      pontuacao: null,
      data_criacao: null,
      data_entrega: null,
    };
    this.titleModal = "Adicionar";
  }
  
  isAdmin = sessionStorage.getItem('tipoLogado') == 'instrutor' ?  true :  false

  adicionar(){
    this.AtividadeService.adicionar(this.atividade);
  }

  openModalEditar(i){
    this.titleModal = "Editar";
    this.atividade =  Object.assign({}, i); //Faz uma copia do objeto
  }

  editar(){
    this.AtividadeService.editar(this.atividade);
    this.getAll();
  }

  deletar(id){
    if(this.atividades.length > 1){
      this.AtividadeService.deletar(id);
    }else{
      alert("É necessario que tenha pelo menos usuário para que seja possível fazer login.")
    }
    
  } 

  openModalDeletar(id){
    this.idDeletar = id
  }

  getAll() { 
    this.AtividadeService.getAll().subscribe(data => {
      this.atividades = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as AtividadeModel
        };
        
      })
    });
  }


}
