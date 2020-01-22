<template>
    <div id="login">
        <LoginModel>

        </LoginModel>
    </div>    
</template>

<script>
import LoginModel from '@/components/login/LoginModel'
export default {
    name: 'Login',
    components: {
        LoginModel
    }
}
</script>

<style  scoped>
#login{
    width: 100%;
    height: 100%;
}
</style>