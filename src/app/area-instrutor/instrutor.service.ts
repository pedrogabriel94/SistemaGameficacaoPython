import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { InstrutorModel } from '../classes/instrutor.module'

@Injectable({
  providedIn: 'root'
})
export class InstrutorService {

  ref = this.db.collection('instrutores').snapshotChanges();
  instrutores = [];
  instrutor: InstrutorModel = new InstrutorModel();

  constructor(private db: AngularFirestore) { }

  adicionar(instrutor: InstrutorModel){
    this.db.collection('instrutores').add(instrutor);
  }

  getAll()  { 
    return this.db.collection('instrutores').snapshotChanges();
  }

  deletar(id){
      this.db.doc('instrutores/' + id).delete();
  } 

  editar(i){
    // delete i.id;
    this.db.doc('instrutores/' + i.$key).update(i);
  }
}
