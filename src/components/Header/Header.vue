<template>
    <div class="header__container">
        <router-link class="logo__link" to="/user">
            <div class="logo__container">

                <img class="logo" src="../../assets/logo.svg" alt='project star logo' />

                <h1 class="brand">zero</h1>
            </div>
        </router-link>
        <nav class="header__navigation">
            <router-link class="header__navigation_item" to="/about">
                About us
            </router-link>
            <router-link class="header__navigation_item" to="/feedback">
                Feedback
            </router-link>
            <router-link v-if="!auth" class="header__navigation_item header__navigation_item--login" to="/login">
                Login
            </router-link>
            <div class="header__user_nav" v-else>
                <router-link class="header__navigation_item" to="/user/profile">
                    Profile
                </router-link>
                <router-link class="header__navigation_item" to="/logout">
                    Log out
                </router-link>
            </div>


        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        auth(){
            return this.$route.meta.auth;
        }
    }
}
</script>

<style lang="scss">
@import "header.scss";
</style>