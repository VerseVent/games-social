<template>
    <div class="container">
        <div class="contentContainer">
            <h2 class="title">Login</h2>
            <form class="loginForm" @submit.prevent="handleLoginSubmit">
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
export default {

}
</script>

<style lang="scss">
    @import "./login.scss";
</style>

