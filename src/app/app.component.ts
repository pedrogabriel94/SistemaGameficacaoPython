import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGameficacao';
  viewMenu: string = localStorage.getItem("logado");


  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.viewMenu.subscribe(
      x => this.viewMenu = localStorage.getItem("logado")
    );

  }
}
