<template>
    <div></div>
</template>
<script lang='ts'>
import { defineComponent, type PropType } from 'vue';
export default defineComponent({
    name: 'AuthForm',
    props: {
        isModeForm: {
            type: String as PropType<string>,
            required: true,
        }
    },
    setup() {
        //Start Coding
        return {}
    },
})
</script>
<style scoped></style>
