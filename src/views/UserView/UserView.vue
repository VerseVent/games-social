<template>
    <div>
        <Header>
        </Header>
        <div class="userActions__container">
            <router-link class="userActions_link" :to="{name: 'games'}">Games</router-link>
            <router-link class="userActions_link" to="/user/friends">Friends</router-link>
            <!-- <router-link to="favoritePlayers"></router-link> -->
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
export default {
    name: "user",
    components: {
        Header,
    },
}
</script>

<style lang="scss">
        @import './user.scss';
</style>