<template>
    <div class = "container">
        <div class = "contentContainer">
            <h2 class = "title">Sign up</h2>
            <form class="loginForm" onSubmit={handleSignupSubmit}>
                <input class="loginFormField" type="text" placeholder="Email" />
                <input class="loginFormField" type="text" placeholder="Username" />
                <input class="loginFormField" type="password" placeholder="Password" />
                <input class="loginFormField" type="password" placeholder="Confirm password" />

                <button class = "submitBtn" type="submit">
                    Sign up
                </button>
            </form>
            <div class = "info">
                <p>
                    Already have an account ?
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    @import './signup.scss';
</style>