import { authService } from '../services/auth.service.js';

export const notAuthenticatedGuard = (to, from, next) => {
    const token = authService.getToken();
    
    if (token) {
        next('/empleados');
    } else {
        next();
    }
};