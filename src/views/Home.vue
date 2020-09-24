<template>
  <section class="images-wrapper">
    <div v-if="loading">Loading...</div>
    <carousel :images="images" />
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel
  },
  computed: {
    ...mapState(["images", "loading"])
  }
};
</script>
