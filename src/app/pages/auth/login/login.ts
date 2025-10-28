import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
  
@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    imports:[FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,MatIconModule]
})
export class LoginComponent  {
 hidePassword = signal(true);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  togglePassword() {
    this.hidePassword.set(!this.hidePassword());
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ فرم معتبر:', this.form.value);
    } else {
      console.log('😒 form in invalid');
      
      this.form.markAllAsTouched();
    }
  }
}
