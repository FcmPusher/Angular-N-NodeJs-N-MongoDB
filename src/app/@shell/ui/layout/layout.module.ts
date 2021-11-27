import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { LayoutComponent } from './layout.component';
@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule, FooterModule, ToastModule, NgxSpinnerModule],
  providers: [ MessageService, ConfirmationService],
  exports: [LayoutComponent],
})
export class LayoutModule {}
