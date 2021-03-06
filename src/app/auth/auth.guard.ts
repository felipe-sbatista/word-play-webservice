import { UsuarioService } from './../service/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private usuarioService: UsuarioService) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   if(this.authService.isLoggedIn !== true) {
  //     this.router.navigate(['login'])
  //   }
  //   return true;
  // }
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.usuarioService.getCurrentUser()
        .then(user => {
          return resolve(true);
        }, err => {
          this.router.navigate(['login']);
          return resolve(false);
        })
    })
  }
}
