import axios from 'axios';
import { environment } from '../config/environments.js';
import { authService } from './auth.service.js';

export class EmpleadoService {
    constructor() {
        this.baseUrl = environment.baseUrl;
    }

    getEmpleados() {
        return new Promise((resolve) => {
            const token = authService.getToken();
            axios.get(this.baseUrl + "api/Empleados/PerfilEmpleado", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.error('Error fetching empleados:', error);
                resolve(null);
            });
        });
    }

    getSubordinados() {
        return new Promise((resolve) => {
            const token = authService.getToken();
            axios.get(this.baseUrl + "api/empleados/Subordinados", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.error('Error fetching subordinados:', error);
                resolve([]);
            });
        });
    }
}

export const empleadoService = new EmpleadoService();