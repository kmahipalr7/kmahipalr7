import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly sessionKey = 'zomato.currentUser';
  private readonly loggedIn = signal(false);
  readonly isLoggedIn = this.loggedIn.asReadonly();

  constructor() {
    if (this.readSession()) {
      this.loggedIn.set(true);
    }
  }

  async register(fullName: string, email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      });

      return response.ok;
    } catch {
      return false;
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const validCredentials = response.ok;

      if (validCredentials) {
        this.writeSession(email.trim().toLowerCase());
        this.loggedIn.set(true);
      }

      return validCredentials;
    } catch {
      return false;
    }
  }

  private readSession(): string | null {
    return typeof localStorage === 'undefined' ? null : localStorage.getItem(this.sessionKey);
  }

  private writeSession(email: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.sessionKey, email);
    }
  }
}
