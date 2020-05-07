import { Component, OnInit } from '@angular/core';
import { InstrutorModel } from '../classes/instrutor.module'
import { InstrutorService } from './instrutor.service'



@Component({
  selector: 'app-area-instrutor',
  templateUrl: './area-instrutor.component.html',
  styleUrls: ['./area-instrutor.component.css'],
})
export class AreaInstrutorComponent implements OnInit {


  idDeletar: string;
  instrutores = [];
  instrutor: InstrutorModel = new InstrutorModel();
  titleModal: string = "Adicionar";

  constructor(private instrutorService: InstrutorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  abrirModal() {
    this.instrutor = {
      nome: null,
      cpf: null,
      senha: null,
      cargo: null,
      telefone: null,
      login: null,
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
    var cpfCerto = this.formataCPF(this.instrutor.cpf)
    this.instrutor.cpf = cpfCerto
    var telFormatado = this.formataTelefone(this.instrutor.telefone)
    this.instrutor.telefone = telFormatado
    this.instrutorService.adicionar(this.instrutor);
  }
  

  getAll() {
    this.instrutorService.getAll().subscribe(data => {
      this.instrutores = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as InstrutorModel
        };

      })
    });
  }

  openModalDeletar(id) {
    this.idDeletar = id
  }

  deletar(id) {
    if (this.instrutores.length > 1) {
      this.instrutorService.deletar(id);
    } else {
      alert("É necessario que tenha pelo menos usuário para que seja possível fazer login.")
    }

  }

  openModalEditar(i) {
    this.titleModal = "Editar";
    this.instrutor = Object.assign({}, i); //Faz uma copia do objeto
  }

  editar() {
    this.instrutorService.editar(this.instrutor);
    this.getAll();
  }

}
