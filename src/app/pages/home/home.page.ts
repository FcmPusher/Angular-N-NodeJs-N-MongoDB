import { Component, OnInit } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { StorageMap } from '@ngx-pwa/local-storage';
@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  path = ROUTER_UTILS.config;
  theme: any;
  isDark: any;
  constructor(private themeService: ThemeService, private storage: StorageMap) {
    this.storage.get('App/theme', { type: 'string' }).subscribe({
      next: (user) => {
        console.log(user);
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
  }
  ngOnChanges() {
    this.themeService.getDarkMode();
  }
  onClickChangeTheme(theme: ThemeList): void {
    console.log(theme);
    console.log(this.themeService.getTheme());
    this.themeService.setTheme(theme);
    console.log(this.themeService.getTheme());
  }
}
