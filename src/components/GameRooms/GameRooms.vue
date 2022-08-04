<template>
    <div class="container">
        <div class="game__container">
            <h1 class="game__title">{{this.game.title}}</h1>
            <div class="game__createForm">
                <input class="game__input" placeholder="Find room" />
                <Modal>
                    My slot: form
                </Modal>
            </div>

        </div>
        <div class="rooms__container">
            <div v-for="room in game.rooms" :key="room._id" class="room">
            </div>
            <p v-if="!game.rooms.length">There will be rooms</p>
        </div>
    </div>
</template>

<script>
import Modal from '../Common/Modal.vue';
import AxiosAPI from '@/service/AxiosAPI';
export default {
    components: {
        Modal,
    },
    async mounted() {
        const ax = new AxiosAPI();
        const gameId = this.$route.params.gameId;
        this.game = await ax.getGameById(gameId);
        
    },
    data() {
        return {
            game:{},
        }
    }
}
</script>

<style lang ='scss' scoped>
    @import './gameRooms.scss';
</style>