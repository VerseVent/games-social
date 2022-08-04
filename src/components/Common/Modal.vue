<template>
    <div name="modal">
        <button @click="showModal = true" class="modal__button">Create room</button>
        <div v-if="showModal">
            <div class="modal-mask">
                <div class="modal-container">
                    <button class="modal-default-button" @click="showModal = false">X</button>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        }
    }
}
</script>

<style lang="scss">
    @import './modal.scss';
</style>