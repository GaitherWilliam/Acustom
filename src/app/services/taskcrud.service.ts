import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskcrudService {
  firestoreCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) { 
    this.firestoreCollection = firestore.collection('tasks');
  }

  addTask(task: string){
    this.firestoreCollection.add({
      task,
      isDone: false
    })
  }
}
