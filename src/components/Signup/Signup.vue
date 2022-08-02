<template>
    <div class="signup__container">
        <div class="contentContainer">
            <h2 class="title">Sign up</h2>
            <form enctype="multipart/form-data" class="signupForm" @submit.prevent="handleSignup">
                <input class="loginFormField" type="text" placeholder="Email" required autocomplete="mike.82pronka.27a@gmail.com" />
                <input class="loginFormField" type="text" placeholder="Username" required autocomplete="versevent" />
                <input class="loginFormField" type="password" placeholder="Password" required
                    autocomplete="12345678aA" />
                <input class="loginFormField" type="password" placeholder="Confirm password" required
                    autocomplete="12345678aA" />

                <label class="signup__image_input_label" for="avatar">
                    <p v-if="!imgSrc">Your image</p><img class="signup_avatar" :src="imgSrc" width="100" height="100"
                        v-if="imgSrc" />
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
import AxiosAPI from '../../service/AxiosAPI'

export default {
    data() {
        return {
            imgSrc: '',
            avatarFile:null,
        }
    },
    methods: {
        async handleSignup(e) {
            const form = e.target.elements;
            const tempPassword = form[3].value;
            const data = new FormData();
            if (form[2].value !== tempPassword) return;
            data.append('username', form[1].value);
            data.append('email', form[0].value);
            data.append('password', form[2].value);
            data.append('avatar', this.avatarFile);
            data.append('favoriteGamesList', []);
            
            const ax = new AxiosAPI();
            const res = await ax.sendSignupForm(data);
        },
        onFile(e) {
            const files = e.target.files;
            if (!files.length) return;

            const reader = new FileReader();
            this.avatarFile = files[0];
            reader.readAsDataURL(files[0]);
            reader.onload = () => (this.imgSrc = reader.result);
        }
    }
}
</script>

<style lang="scss">
    @import './signup.scss';
</style>