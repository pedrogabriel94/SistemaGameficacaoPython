import { Injectable } from '@angular/core';
import { CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ChildGuards implements CanActivateChild {

  canActivateChild(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean{

    console.log("tesre");
    return true;
  }
}
