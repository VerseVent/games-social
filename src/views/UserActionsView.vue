<template>
    <div>
        <Header></Header>
        <UserActions></UserActions>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import UserActions from "@/components/UserActions/UserActions.vue";
export default {
    name: "useractions",
    components: {
        Header,
        UserActions
    },
}
</script>

<style>

</style>