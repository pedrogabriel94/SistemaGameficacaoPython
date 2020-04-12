import { Component, OnInit } from '@angular/core';
import { AtividadeService } from './atividades.service';
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

  abrirModal() {
    this.atividade = {
      nome: null,
      descricao: null,
      pontuacao: null,
      data_criacao: null,
      data_entrega: null,
    };
    this.titleModal = "Adicionar";
  }

  isAdmin = sessionStorage.getItem('tipoLogado') == 'instrutor' ? true : false

  formatarData(string) {
    var data = string.split('-')
    let dia = data[2]
    let mes = data[1]
    let ano = data[0]
    dia = dia.padEnd(3, "/")
    mes = mes.padEnd(3, "/")

    var dataformatada = dia + mes + ano
    return dataformatada
  }

  adicionar() {
    this.atividade.data_criacao = String(new Date().toLocaleDateString())
    var dataEntrega = this.formatarData(this.atividade.data_entrega)
    this.atividade.data_entrega = dataEntrega
    this.AtividadeService.adicionar(this.atividade);
  }

  openModalEditar(i) {
    this.titleModal = "Editar";
    this.atividade = Object.assign({}, i);
  }

  editar() {
    this.AtividadeService.editar(this.atividade);
    this.getAll();
  }

  deletar(id) {
      this.AtividadeService.deletar(id);
  }

  openModalDeletar(id) {
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
