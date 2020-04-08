import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AtividadeModel } from '../classes/atividade.module';


@Injectable({
    providedIn: 'root'
})

export class AtividadeService {
    ref = this.db.collection('desafios').snapshotChanges();
    atividades = [];
    atividade: AtividadeModel = new AtividadeModel();

    constructor(private db: AngularFirestore) { }

    adicionar(atividade: AtividadeModel){
        this.db.collection('desafios').add(atividade);
      }

    getAll() {
        return this.db.collection('desafios').snapshotChanges();
    }

    deletar(id){
        this.db.doc('desafios/' + id).delete();
    } 

    editar(i){
        
        this.db.doc('desafios/' + i.$key).update(i);
      }

} 