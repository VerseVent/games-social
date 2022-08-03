<template>
    <h1>Game's rooms: {{this.$route.params.gameId}}</h1>
</template>

<script>
import AxiosAPI from '@/service/AxiosAPI';
export default {
    async mounted() {
        const ax = new AxiosAPI();
        const gameId = this.$route.params.gameId;
        this.games = await ax.getGameById(gameId);
        
    }
}
</script>

<style>

</style>