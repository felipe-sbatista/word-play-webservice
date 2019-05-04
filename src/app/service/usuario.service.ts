import { Usuario } from './../entity/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private db: AngularFireDatabase) { }

  listAllUsuarios() {
    return this.db.list('usuarios')
    .snapshotChanges()
    .pipe(
      map(changes=>{
        return changes.map(c=>({key: c.payload.key, ...c.payload.val()}));
    }));


  }
}
