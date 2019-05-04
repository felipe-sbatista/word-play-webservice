import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalavraService {
  task: any;
  percentage: any;
  snapshot: any;
  downloadURL: any;
  uploadTask: firebase.storage.UploadTask;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {}

  upload(file){
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(file.name).put(file);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>{

      },
      (error)=>{
        console.log(error);
      },

      ()=>{
        console.log('finished');
      });
  }

  listAllPalavras() {
    return this.db.list('palavras')
    .snapshotChanges()
    .pipe(
      map(changes=>{
        return changes.map(c=>({key: c.payload.key, ...c.payload.val()}));
    }));
  }
}
