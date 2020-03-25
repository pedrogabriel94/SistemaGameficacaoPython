import { Component, OnInit } from '@angular/core';
import { InstrutorModel } from '../classes/instrutor.module'
import { InstrutorService } from './instrutor.service'


 
@Component({
  selector: 'app-area-instrutor',
  templateUrl: './area-instrutor.component.html',
  styleUrls: ['./area-instrutor.component.css']
})
export class AreaInstrutorComponent implements OnInit {

 

  instrutores = [];
  instrutor: InstrutorModel = new InstrutorModel();
  titleModal: string = "Adicionar";

  constructor(private instrutorService: InstrutorService) {}

  ngOnInit(): void {
    this.getAll();
  } 

  abrirModal(){
    this.instrutor = {
      nome: null,
      cpf: null,
      senha: null,
      cargo: null
    };
    this.titleModal = "Adicionar";
  }

  adicionar(){
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

  deletar(id){
    if(this.instrutores.length > 1){
      this.instrutorService.deletar(id);
    }else{
      alert("É necessario que tenha pelo menos usuário para que seja possível fazer login.")
    }
    
  } 

  openModalEditar(i){
    this.titleModal = "Editar";
    this.instrutor =  Object.assign({}, i); //Faz uma copia do objeto
  }

  editar(){
    this.instrutorService.editar(this.instrutor);
    this.getAll();
  }

}
