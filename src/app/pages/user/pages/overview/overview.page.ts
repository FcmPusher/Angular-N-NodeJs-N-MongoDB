import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getEmailId } from '@app/@core/utils';
import { AuthService } from '@app/pages/auth/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  passwordResetForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private authSerivce: AuthService, private messageService: MessageService,) {

  }
  ngOnInit(): void {

  }



  onSubmit() {

    const passwordResetForm = {

      password: this.passwordResetForm.controls['currentPassword'].value,
      newPassword: this.passwordResetForm.controls['newPassword'].value,
      email: getEmailId()
    }
    if (this.passwordResetForm.controls['newPassword'].value !== this.passwordResetForm.controls['repeatPassword'].value) {
      this.passwordResetForm.controls['repeatPassword'].setErrors({ passwordMismatch: true });
    } else {
      this.passwordResetForm.controls['repeatPassword'].setErrors(null);
    }

    if (this.passwordResetForm.valid) {
      this.authSerivce.changePassword(passwordResetForm).subscribe(
        (res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Updated password',
            life: 3000,
          });
        },
        (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: 'Update change password failed',
            life: 3000,
          });
        },
      );
    }
  }
}
