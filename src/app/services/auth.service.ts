import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    router = inject(Router);
    
    isAuthenticated(): boolean {
        const isLoggedIn = true; // Replace with real authentication check

        if (isLoggedIn) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false
    }

}