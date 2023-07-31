<template lang="">
    <div>
        <AccountLoginForm @submit="onSubmit"/>
    </div>
</template>

<script>
import AccountLoginForm from '@/components/account/AccountLoginForm.vue'
export default {
    components: {
        AccountLoginForm
    }
}
</script>

<style lang="">
    
</style>