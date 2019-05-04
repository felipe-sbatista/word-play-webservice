import { UsuarioService } from './../service/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) {
    
  }
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.usuarioService.getCurrentUser()
        .then(user => {
          this.router.navigate(['']);
          return resolve(true);
        }, err => {
          this.router.navigate(['login']);
          return resolve(false);
        })
    })
  }

}
