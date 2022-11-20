<template>
  <div>
    <Header></Header>
    <p>Content</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header/Header.vue';
export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>
