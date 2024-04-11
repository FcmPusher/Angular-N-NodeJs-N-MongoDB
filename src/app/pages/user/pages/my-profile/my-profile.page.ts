import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '@app/@core/services/theme';
import { StorageItem, getItem } from '@app/@core/utils';
import { AuthService } from '@app/pages/auth/services/auth.service';

@Component({
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage  implements OnInit  {
  theme: any;
  isDark: any;
  isLoggedIn$: any;
  open = false;

  constructor(private themeService: ThemeService, private authService: AuthService, private router: Router) {
    this.themeService.isDarks().subscribe({
      next: (user) => {
        console.log('kns');

        this.isDark = user;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit() {
    this.themeService.isDarks().subscribe({
      next: (user) => {
        console.log('kns');

        this.isDark = user;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.isLoggedIn$ = !!getItem(StorageItem.Auth);
    console.log(this.isLoggedIn$);
  }
}
