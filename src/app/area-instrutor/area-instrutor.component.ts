import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../classes/pessoa.module';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

 
@Component({
  selector: 'app-area-instrutor',
  templateUrl: './area-instrutor.component.html',
  styleUrls: ['./area-instrutor.component.css']
})
export class AreaInstrutorComponent implements OnInit {

 

  pessoas = [];
  pessoa: PessoaModel = new PessoaModel();
  // customersRef: AngularFirestoreCollection<PessoaModel> = null;
  private dbPath = '/alunos';

  constructor(private db: AngularFirestore) {}

  getAllService(){
    console.log(this.db);
    return this.db.collection('/alunos').snapshotChanges();
  }

  ngOnInit(): void {
    this.getAll();
  } 

  abrirModal(){
    this.pessoa = {
      nome: null,
      cpf: null,
      presenca: null,
      pontos: null,
      senha: null,
      tipo: null
    };
  }

  adicionar(){
    this.db.collection('alunos').add(this.pessoa);
  }

  getAll() { 
    this.getAllService().subscribe(data => {
      this.pessoas = data.map(e => {
        return {
          $key: e.payload.doc.id,
          ...e.payload.doc.data() as PessoaModel
        };
        
      })
      console.log(this.pessoas);
    });
  }

  deletar(id){
      this.db.doc('alunos/' + id).delete();
  } 

  editar(){
    return 1;
  }

}
