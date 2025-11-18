<template>
    <div class="home-container">
        <h1>Bienvenido al Sistema de Empleados</h1>
        <p>Por favor inicia sesión para acceder a tu perfil</p>
        <router-link to="/login" class="btn btn-primary">
            Iniciar Sesión
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeoPage'
}
</script>