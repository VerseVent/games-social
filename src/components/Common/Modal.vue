<template>
    <div class="modal__main_container" name="modal">
        <button @click="showModal = true" class="modal__button">Create room</button>
        <div>
            <transition name="modal-slide">
                <div v-if="showModal" @click.self="showModal = false" class="modal-mask">
                    <div class="modal-container">
                        <div class="modal__close_btn_container">
                            <button class="modal-default-button" @click="showModal = false">X</button>

                        </div>
                        <slot></slot>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        }
    },
}
</script>

<style lang="scss">
    @import './modal.scss';
</style>