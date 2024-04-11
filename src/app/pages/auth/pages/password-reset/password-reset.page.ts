import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
@Component({
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordResetPage {

  passwordResetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private authServices:AuthService,private messageService: MessageService){

  }

  onSubmit(){
    const passwordResetForm={

      email:this.passwordResetForm.controls['email'].value,
    }
    console.log(passwordResetForm);
    if (this.passwordResetForm.valid) {
      this.authServices.resetPassword(passwordResetForm).subscribe(
        (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Reset password successfully',
            life: 3000,
          });
        },
        (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: 'Reset password failed',
            life: 3000,
          });
        },
      );
    }

  }

}
