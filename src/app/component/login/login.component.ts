import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/entity/user';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TopbarComponent]
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private authService: AuthService, private topbarComponent: TopbarComponent) { }
  ngOnInit() { }

  login(): void {
    this.authService.login(this.email, this.password);
    this.topbarComponent.switchIcon();
  }

}
