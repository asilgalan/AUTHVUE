<template>
    <div class="login-container">
        <div class="login-form">
            <h2>Iniciar Sesión</h2>
            
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="userName">Usuario:</label>
                    <input 
                        type="text" 
                        id="userName" 
                        v-model="loginForm.userName"
                        required
                    >
                </div>
                
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        v-model="loginForm.password"
                        required
                    >
                </div>
                
                <button type="submit" class="btn btn-primary">
                    Iniciar Sesión
                </button>
                
                <div v-if="hasError" class="error-message">
                    Error en el login. Verifica tus credenciales.
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { authService } from '../services/auth.service.js';

export default {
    name: 'LoginPage',
    data() {
        return {
            loginForm: {
                userName: '',
                password: ''
            },
            hasError: false
        };
    },
    methods: {
        onSubmit() {
            console.log("PULSADO");
            
            if (!this.loginForm.userName || !this.loginForm.password) {
                
                return;
            }

            authService.login(this.loginForm.userName, this.loginForm.password)
                .then((isLogin) => {
                    if (isLogin) {
                        console.log("too bienn");
                        this.$router.push('/empleados');
                        return;
                    }

                    this.hasError = true;
                    setTimeout(() => {
                        this.hasError = false;
                    }, 2000);
                });
        }
    }
}
</script>