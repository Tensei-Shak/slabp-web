<template>
    <div>
        <AuthForm isModeForm='Register' />
    </div>
</template>
<script lang='ts'>
import AuthForm from '@/components/AuthForm.vue';
import { defineComponent, } from 'vue';
export default defineComponent({
    name: 'LoginView',
    components: {
        AuthForm
    },
    setup() {
        //Start Coding
        return {}
    },
})
</script>
<style lang="scss" scoped></style>
