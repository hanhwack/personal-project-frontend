<template lang="">
    <div>
        <account-creation-form @submit="onSubmit"/>
    </div>
</template>

<script>
import AccountCreationForm from '@/components/account/AccountCreationForm.vue';
import { mapActions } from 'vuex';
const accountModule = 'accountModule'
export default {
    components: {
        AccountCreationForm
    },
    methods: {
        ...mapActions(accountModule, ['requestRegisterAccountToSpring']),
        async onSubmit (payload) {
            const {email, password} = payload
            await this.requestRegisterAccountToSpring(
                {email, password})
        }
    }
}
</script>

<style lang="">
    
</style>