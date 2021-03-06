import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(
    private router: Router,

  ) {}

  public navigate(url: any): void {
    this.router.navigate([url]);
  }

}
