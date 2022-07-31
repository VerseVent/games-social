<template>
    <div class="signup__container">
        <div class="contentContainer">
            <h2 class="title">Sign up</h2>
            <form class="signupForm" @submit.prevent="handleSignup">
                <input class="loginFormField" type="text" placeholder="Email" required />
                <input class="loginFormField" type="text" placeholder="Username" required />
                <input class="loginFormField" type="password" placeholder="Password" required />
                <input class="loginFormField" type="password" placeholder="Confirm password" required />

                <label class="signup__image_input_label" for="avatar">
                    <p v-if="!imgSrc">Your image</p><img class="signup_avatar" :src="imgSrc" width="100" height="100" v-if="imgSrc" />
                </label>
                <input class="signup__image_input" type="file" @change="onFile" id="avatar" name="avatar"
                    accept="image/png, image/jpeg" required />

                <button class="submitBtn" type="submit">
                    Sign up
                </button>
            </form>
            <div class="info">
                <p>
                    Already have an account ?
                    <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: '',
        }
    },
    methods: {
        handleSignup(e) {
            const form = e.target.elements;
            const formData = {
                email: form[0].value,
                username: form[1].value,
                password: form[2].value,
                confirmPassword: form[3].value,
                userImage: this.imgSrc,
            };
            console.log(formData);

        },
        onFile(e) {
            const files = e.target.files;
            if (!files.length) return;

            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => (this.imgSrc = reader.result);
        }
    }
}
</script>

<style lang="scss">
    @import './signup.scss';
</style>