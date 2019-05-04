import { UsuarioService } from './../service/usuario.service';
import { Usuario } from './../entity/usuario';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioResolver implements Resolve<Usuario> {

    constructor(public usuarioService: UsuarioService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.usuarioService.listAllUsuarios();
    }
}
