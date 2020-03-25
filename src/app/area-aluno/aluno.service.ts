import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlunoModel } from '../classes/aluno.module'

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  ref = this.db.collection('alunos').snapshotChanges();
  aluno: AlunoModel = new AlunoModel();

  constructor(private db: AngularFirestore) { }

  adicionar(aluno: AlunoModel){
    this.db.collection('alunos').add(aluno);
  }

  getAll()  { 
    return this.db.collection('alunos').snapshotChanges();
  }

  deletar(id){
      this.db.doc('alunos/' + id).delete();
  } 

  editar(i){
    // delete i.id;
    this.db.doc('alunos/' + i.$key).update(i);
  }
}

