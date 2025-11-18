<template>
    <div class="empleados-container">
        <header class="header">
            <h1>Perfil de Empleado</h1>
            <button @click="logout" class="btn btn-logout">
                Cerrar Sesión
            </button>
        </header>

        <div v-if="empleado" class="empleado-info">
            <h2>Tu Información</h2>
            <div class="info-card">
                <p><strong>ID:</strong> {{ empleado.idEmpleado }}</p>
                <p><strong>Apellido:</strong> {{ empleado.apellido }}</p>
                <p><strong>Oficio:</strong> {{ empleado.oficio }}</p>
                <p><strong>Salario:</strong> {{ empleado.salario }}</p>
                <p><strong>Director:</strong> {{ empleado.director }}</p>
            </div>
        </div>

        <div class="subordinados-section">
            <button @click="cargarSubordinados" class="btn btn-primary">
                Ver Subordinados
            </button>

            <div v-if="bandera" class="subordinados-list">
                <h3>Subordinados</h3>
                <div v-for="sub in empleados" :key="sub.idEmpleado" class="subordinado-card">
                    <p><strong>ID:</strong> {{ sub.idEmpleado }}</p>
                    <p><strong>Apellido:</strong> {{ sub.apellido }}</p>
                    <p><strong>Oficio:</strong> {{ sub.oficio }}</p>
                    <p><strong>Salario:</strong> {{ sub.salario }}</p>
                    <p><strong>Director:</strong> {{ sub.director }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { empleadoService } from '../services/empleado.service.js';
import { authService } from '../services/auth.service.js';

export default {
    name: 'EmpleadosPage',
    data() {
        return {
            empleado: null,
            empleados: [],
            bandera: false
        };
    },
    mounted() {
        this.cargarEmpleado();
    },
    methods: {
        cargarEmpleado() {
            empleadoService.getEmpleados()
                .then((response) => {
                    this.empleado = response;
                });
        },
        cargarSubordinados() {
            empleadoService.getSubordinados()
                .then((response) => {
                    this.empleados = response;
                    this.bandera = true;
                });
        },
        logout() {
            authService.logout();
            this.$router.push('/');
        },
       
    }
}
</script>