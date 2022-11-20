<template>
    <div>
        <Header>
        </Header>
        <Login></Login>

    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Login from "@/components/Login/Login.vue";
export default {
    name: "login",
    components: {
        Header,
        Login
    },
}
</script>

<style>

</style>