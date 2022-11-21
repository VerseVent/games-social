<template>
  <div class="container p-4">
    <div class="row">
      <div class="text-start col-2 fs-3">Room: 123</div>
    </div>
    <div class="row px-2 my-2">
      <div class="text-start col-12 ps-3 bg-dark rounded py-2">
        1 User: {{ this.GET_CURRENT_USER.username }}
      </div>
    </div>
    <div class="row justify-content-end p-2">
      <button
        @click="deleteUserRoom"
        class="col-1 btn btn-outline-success px-4"
      >
        Leave
      </button>
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
    ...mapGetters(["GET_CURRENT_USER"]),
  },
  methods: {
    ...mapActions(["getUserById", "deleteRoomAndUser"]),
    async deleteUserRoom() {
      const currentUser = this.GET_CURRENT_USER;
      const payload = {
        userId: currentUser.id,
        gameId: currentUser.room.gameId,
        roomId: currentUser.roomId,
      };
      console.log(payload);
      await this.deleteRoomAndUser(payload);
      await this.getUserById(payload.userId);
      this.$router.push(`/user/games`);
    },
  },
};
</script>
