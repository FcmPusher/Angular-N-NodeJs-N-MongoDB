import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { StorageItem, getItem } from '@app/@core/utils';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { AuthService } from '../auth/services/auth.service';
@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {
  path = ROUTER_UTILS.config;
  theme: any;
  isDark: any;
  isLoggedIn$: any;
  open = true;
  visible: boolean = false;
  
  constructor(private themeService: ThemeService, private authService: AuthService, private router: Router,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService, @Inject(TuiDialogService) private readonly dialogService: TuiDialogService) {
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
        this.isDark = user;
      },
      error: (error) => {
        console.log(error);
      },
    });

    setTimeout(() => {
      this.isLoggedIn$ = !!getItem(StorageItem.Auth);
      console.log(this.isLoggedIn$);
    }, 300);

 
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
  onClickSignOut(): void {
    this.open = !this.open;
    this.authService.signOut();

    const { root, signIn } = ROUTER_UTILS.config.auth;
    this.router.navigate(['/', root, signIn]);
  }
  

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogService.open(content).subscribe();
}
}
