import { authService } from '../services/auth.service.js';

export const authenticatedGuard = (to, from, next) => {
    const token = authService.getToken();
    
    if (!token) {
        next('/login');
    } else {
        next();
    }
};