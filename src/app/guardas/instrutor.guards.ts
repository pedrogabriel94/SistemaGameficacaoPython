import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class InstrutorGuardsService implements CanActivate {

  viewMenu = new EventEmitter<boolean>();
  constructor(
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{
    
    if(sessionStorage.getItem('tipoLogado') == "instrutor"){
      return true;
    }

    sessionStorage.setItem("logado", "false");
    this.viewMenu.emit();
    this.router.navigate(['']);
    location.reload();

    return false;
  }
}

