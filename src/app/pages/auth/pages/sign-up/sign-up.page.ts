import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPage {
/*   readonly control = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]); */
  signUpForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    cpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

  });
  onSubmit(){
    const createUserForm={
      name:this.signUpForm.controls['userName'].value,
      email:this.signUpForm.controls['email'].value,
      password:this.signUpForm.controls['password'].value
    }

    console.log(createUserForm);

  }
}
