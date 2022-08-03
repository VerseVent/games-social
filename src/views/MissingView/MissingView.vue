<template>
    <div>
        <Header></Header>
        <h1 class="error__title">Error: #404</h1>
    </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
export default {
    name: "Missing",
    components: {
        Header,
    },
}
</script>

<style lang = 'scss'>
 @import './missing.scss';
</style>