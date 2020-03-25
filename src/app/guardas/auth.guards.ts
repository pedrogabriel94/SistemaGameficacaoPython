import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    
    if(this.authService.usuarioEstaLogado() == "true"){
      console.log("sdf");
      return true;
    }

    console.log("sdafsdfsff");
    this.router.navigate([""]);

    return false;
  }
}
