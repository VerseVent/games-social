<template>
    <div class="container">
        <div class="contentContainer">
            <h2 class="title">Login</h2>
            <form class="loginForm" @submit.prevent="handleLogin">
                <input class="loginFormField" type="text" placeholder="Email" />
                <input class="loginFormField" type="password" placeholder="Password" />
                <div class="checkboxContainer">
                    <input class="loginFormFieldCheckbox" type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button class="submitBtn" type="submit">Login</button>
            </form>
            <div class="info">
                <p>
                    Dont have an account yet ?<router-link to="/signup">Sign up</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import AxiosAPI from '../../service/AxiosAPI'
export default {

    methods: {
        async handleLogin(e) {
            const formElements = e.target.elements;
            const loginData = {
                email: formElements[0].value,
                password: formElements[1].value,
            }
            const ax = new AxiosAPI();
            await ax.sendLoginForm(loginData);
            this.$router.push('/user');
        }
    }
}
</script>

<style lang="scss">
    @import "./login.scss";
</style>

