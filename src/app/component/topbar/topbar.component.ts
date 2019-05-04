import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges {

  constructor(private authService: AuthService, public router: Router, private usuarioService: UsuarioService) { }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.authService.change.subscribe((show: boolean) => {
      this.logged = show;
    });
  }

  logged = false;
  ngOnInit(): void {
    this.authService.change.subscribe(show => {
      this.logged = show;
    });
    this.usuarioService.getCurrentUser().then(usr => {
      if (usr) {
        this.logged = true;
      } else {
        this.router.navigate(['login']);
      }
    });//l395
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
    this.switchIcon();
  }

  redirect(){
    this.usuarioService.getCurrentUser().then(usr => {
      if (usr) {
        this.router.navigate(['']);
        this.logged = true;
      } else {
        this.router.navigate(['login']);
        this.logged = false;
      }
    });
  }

  switchIcon(): void {
    this.logged = !this.logged;
  }


}
