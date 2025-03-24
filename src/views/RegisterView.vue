<template>
    <div>
        <AuthForm :isModeForm="'Login'" @submit="handleAuth" />
    </div>
</template>

<script setup lang="ts">
import AuthForm from "@/components/AuthForm.vue";

const handleAuth = (data: { type: string; name?: string; email: string; password: string }) => {
    console.log("Datos recibidos del formulario:", data);
};
</script>
