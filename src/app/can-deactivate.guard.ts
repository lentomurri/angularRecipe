import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// An Interface identifies a related set of properties and methods to be implemented by a class.
// A given class agrees to support this specification when it implements the interface.

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})

// this assures that the class will implement the interface property
// It has to be more complex in order to be generic:
// The advantage is that you can use this canDeactivateGuard version not only
// on one particular component but on all components which implement the CanComponentDeactivate interface.
// The component itself will create a canDeactivate guard which will independetly decide if the user can leave

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    return component.canDeactivate(); // the angular router will execute the canDeactivate and
    // the component WILL have the canDeactivate guard
  }

}
