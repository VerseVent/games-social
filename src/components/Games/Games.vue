<template>
    <div class="games__container">
        <div class="games__content_container">
            <h2 class="games__title">Select game</h2>
            <div class="games__games_container">
                <div v-for="game in games" :key="game._id" class="game__container">
                        <router-link :to="{name:'gameRooms', params: {gameId: game._id}}">
                        <img class="game__img" :src="game.imgUrl" />

                    </router-link>
                    <h2 class="game__title">{{game.title}}</h2>
                    <h2 class="game__players">Players: {{game.players}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AxiosAPI from '@/service/AxiosAPI';

export default {

    data() {
        return {
            games:[],
        }
    },
    async mounted() {
            const ax = new AxiosAPI();
            this.games = await ax.getGamesInfo();

    }
}
</script>

<style lang="scss">

    @import './games.scss';
</style>