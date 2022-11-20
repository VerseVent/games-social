<template>
  <div class="container">
    <div class="game__container">
      <h1 class="game__title">{{ this.game.title }}</h1>
      <div class="game__createForm">
        <input class="game__input" placeholder="Find room" />
        <Modal>
          <div class="create_room__modal_container">
            <form class="create_room_form" @submit.prevent="handleRoomCreate">
              <h2 class="create_room_form__title">Create your room</h2>
              <input
                class="create_room_form__field"
                v-model="room.roomTitle"
                type="text"
                placeholder="room title"
              />
              <input
                class="create_room_form__field"
                v-model="room.maxPlayers"
                type="number"
                placeholder="max players"
              />
              <div class="private_room__container">
                <label for="isRoomLocked">Private room</label>
                <input
                  id="isRoomLocked"
                  class="create_room_form__checkbox"
                  v-model="room.isRoomLocked"
                  type="checkbox"
                />
              </div>
              <input
                class="create_room_form__field"
                :disabled="!room.isRoomLocked"
                v-model="room.roomPassword"
                type="password"
                placeholder="room password"
              />
              <div class="create_room_btn_container">
                <button type="submit" class="create_room_btn">
                  Create room
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
    <div class="rooms__container">
      <div v-for="room in game.rooms" :key="room._id" class="room"></div>
      <p v-if="game.rooms && !game.rooms.length">There will be rooms</p>
    </div>
  </div>
</template>

<script>
import Modal from "../Common/Modal.vue";
import { axiosAPI } from "@/service/AxiosAPI";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      game: {},
      room: {
        roomTitle: "",
        maxPlayers: null,
        isRoomLocked: false,
        roomPassword: "",
        gameTitle: null,
      },
    };
  },
  computed: {
    ...mapGetters(["GET_USER_ID", "GET_CURRENT_USER"]),
  },
  methods: {
    ...mapActions(["getUserById"]),
    async handleRoomCreate() {
      console.log(this.room);
      const response = await axiosAPI.createGameRoom(this.room);
      console.log(response);
    },
  },
  async mounted() {
    const gameId = this.$route.params.gameId;
    console.log(gameId);
    this.game = await axiosAPI.getGameById(gameId);
    console.log(this.game);
    const userId = this.GET_USER_ID;

    await this.getUserById(userId);
    const user = this.GET_CURRENT_USER;
    if (user.roomId && user.room.gameId === gameId) {
      console.log(123);
      this.$router.push(
        `/user/gameRooms/${this.$route.params.gameId}/${user.roomId}`
      );
    }
    // console.log(this.)
    this.room.gameTitle = this.game.title;
  },
};
</script>

<style lang="scss" scoped>
@import "./gameRooms.scss";
</style>
