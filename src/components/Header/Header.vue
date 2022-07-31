<template>
    <div class="header__container">
        <div class="logo__container">
            <img class="logo" src="../../assets/logo.svg" alt='project star logo'/>
            <h1 class="brand">zero</h1>
        </div>
        <nav class="header__navigation">
            <router-link class="header__navigation_item" to="/about">
                About us
            </router-link>
            <router-link class="header__navigation_item" to="/feedback">
                Feedback
            </router-link>
            <router-link class="header__navigation_item" to="login">
                Login
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "header.scss";
</style>