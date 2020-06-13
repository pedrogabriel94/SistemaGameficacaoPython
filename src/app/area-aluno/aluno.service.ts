import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlunoModel } from '../classes/aluno.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  ref = this.db.collection('alunos').snapshotChanges();
  aluno: AlunoModel = new AlunoModel();

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  adicionar(aluno: AlunoModel) {
    this.db.collection('alunos').add(aluno);
  }

  getAll()  {
    return this.db.collection('alunos').snapshotChanges();
    // return this.http.get(this.baseUrl);
  }

  deletar(id) {
      this.db.doc('alunos/' + id).delete();
  }

  editar(i) {
    this.db.doc('alunos/' + i.$key).update(i);
  }
}

