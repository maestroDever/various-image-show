<template>
  <section class="images-wrapper">
    <h1 class="title">Home</h1>
    <hr />
    <div v-if="loading">Loading...</div>
    <gallery :images="images" />
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Home",
  components: {
    Gallery
  },
  computed: {
    ...mapState(["images", "loading"])
  }
};
</script>
