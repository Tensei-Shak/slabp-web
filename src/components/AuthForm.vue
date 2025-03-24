<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-body">
                        <h2 class="text-center mb-4">
                            {{ isModeForm === "Login" ? "Login" : "Register" }}
                        </h2>

                        <!-- Formulario de Login -->
                        <form v-if="isModeForm === 'Login'" @submit.prevent="handleLogin">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" v-model="email" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" id="password" v-model="password" class="form-control" required />
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Login</button>
                        </form>

                        <!-- Formulario de Registro -->
                        <form v-else-if="isModeForm === 'Register'" @submit.prevent="handleRegister">
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" id="name" v-model="name" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" v-model="email" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" id="password" v-model="password" class="form-control" required />
                            </div>
                            <button type="submit" class="btn btn-success w-100">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps<{ isModeForm: string }>();
const emit = defineEmits(["submit"]);

const email = ref("");
const password = ref("");
const name = ref("");

const handleLogin = () => {
    emit("submit", { type: "login", email: email.value, password: password.value });
};
const handleRegister = () => {
    emit("submit", { type: "register", name: name.value, email: email.value, password: password.value });
};
</script>

<style scoped>
.card {
    border-radius: 10px;
    overflow: hidden;
}
</style>
