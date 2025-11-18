import axios from 'axios';
import { environment } from '../config/environments.js';

export class AuthService {
    constructor() {
        this._token = localStorage.getItem('token');
    }

    login(userName, password) {
        return new Promise((resolve) => {
            axios.post(environment.baseUrl + "Auth/login", { userName, password })
                .then((response) => {
                    console.log(response.data.response);
                    localStorage.setItem("token", response.data.response);
                    this._token = response.data.response;
                    console.log('Token guardado:', localStorage.getItem("token"));
                    resolve(true);
                })
                .catch((error) => {
                    console.error('Error en login:', error);
                    resolve(false);
                });
        });
    }

    logout() {
        localStorage.removeItem('token');
        this._token = null;
    }

    getToken() {
        return this._token;
    }
}

export const authService = new AuthService();