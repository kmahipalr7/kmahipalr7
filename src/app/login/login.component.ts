import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  template: `
    <section class="auth-page">
      <div class="auth-card">
        <p class="auth-label">Welcome back</p>
        <h1>Login to zomato</h1>
        <p class="auth-intro">Pick up where you left off and discover your next favorite meal.</p>
        <p class="demo-hint">Demo login: alex@example.com / Password1</p>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>
          <label for="login-email">Email address</label>
          <input id="login-email" type="email" placeholder="alex@example.com" formControlName="email" [class.invalid]="email.touched && email.invalid" />
          <small class="error" *ngIf="email.touched && email.hasError('required')">Email address is required.</small>
          <small class="error" *ngIf="email.touched && email.hasError('email')">Enter a valid email address.</small>

          <label for="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" formControlName="password" [class.invalid]="password.touched && password.invalid" />
          <small class="error" *ngIf="password.touched && password.hasError('required')">Password is required.</small>

          <button type="submit" [disabled]="loginForm.invalid">Login</button>
        </form>

        <p class="success-message" *ngIf="submitted">Login details accepted.</p>
        <p class="error form-error" *ngIf="loginError">Incorrect email or password.</p>

        <p class="auth-footer">New to zomato? <a routerLink="/signup">Create an account</a></p>
      </div>
    </section>
  `,
  styles: [
    `
      .auth-page {
        min-height: 70vh;
        display: grid;
        place-items: center;
        padding: 56px 20px;
      }
      .auth-card {
        width: min(100%, 460px);
        padding: 34px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.74);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
      }
      .auth-label {
        margin: 0 0 10px;
        color: #d93a3a;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }
      .auth-card h1 {
        margin: 0;
        font-size: 2.5rem;
        letter-spacing: -0.06em;
      }
      .auth-intro,
      .auth-footer,
      .demo-hint {
        color: #555;
        line-height: 1.6;
      }
      .demo-hint {
        margin: 14px 0 0;
        font-size: 0.86rem;
      }
      .auth-card form {
        display: grid;
        gap: 8px;
        margin-top: 26px;
      }
      .auth-card label {
        margin-top: 10px;
        font-weight: 700;
      }
      .auth-card input {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 12px;
        padding: 13px 14px;
        background: rgba(255, 255, 255, 0.8);
      }
      .auth-card input.invalid {
        border-color: #d93a3a;
        box-shadow: 0 0 0 3px rgba(217, 58, 58, 0.1);
      }
      .error {
        color: #c52f2f;
        font-size: 0.82rem;
      }
      .form-error {
        margin: 18px 0 0;
        font-weight: 700;
      }
      .auth-card form button {
        margin-top: 18px;
        border: none;
        border-radius: 999px;
        padding: 14px;
        background: #111;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
      }
      .auth-card form button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .success-message {
        margin: 18px 0 0;
        padding: 12px 14px;
        border-radius: 12px;
        background: #e7f6eb;
        color: #24733a;
        font-weight: 700;
      }
      .auth-footer {
        margin: 22px 0 0;
        text-align: center;
      }
      .auth-footer a {
        color: #d93a3a;
        font-weight: 700;
        text-decoration: none;
      }
    `,
  ],
})
export class LoginComponent {
  submitted = false;
  loginError = false;

  readonly loginForm;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  async onSubmit(): Promise<void> {
    this.submitted = false;
    this.loginError = false;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    if (!(await this.authService.login(email ?? '', password ?? ''))) {
      this.loginError = true;
      return;
    }

    this.submitted = true;
    void this.router.navigate(['/home']);
  }
}
