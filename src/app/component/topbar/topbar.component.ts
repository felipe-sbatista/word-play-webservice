import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges{

  constructor(private authService: AuthService, public router: Router) { }


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.authService.change.subscribe(show =>{
      this.logged = show;
    });
  }

  logged = false;
  ngOnInit(): void {
    this.logged = this.authService.isLoggedIn;
    this.authService.change.subscribe(show =>{
      this.logged = show;
    });
  }

 
  logout(): void {
    this.authService.logout();
    this.isLogged();
  }

  redirect(): void {
    if(this.authService.isLoggedIn){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['home']);
    }
    
  }

  isLogged(): void {
    this.logged = this.authService.isLoggedIn;
  }

  switchIcon():void{
    this.logged = !this.logged; 
  }
}
