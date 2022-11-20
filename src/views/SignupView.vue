<template>
    <div>
        <Header>
        </Header>
        <Signup></Signup>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Signup from "@/components/Signup/Signup.vue";
export default {
    name: "signup",
    components: {
        Header,
        Signup
    },
}
</script>

<style>

</style>