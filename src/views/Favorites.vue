<template>
  <div class="favorites">
    <h1 class="title">Favorite Images</h1>
    <hr />
    <carousel :images="favoriteImages" />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import { mapGetters } from "vuex";
export default {
  name: "Favorites",
  components: {
    Carousel
  },
  computed: {
    ...mapGetters(["favoriteImages"])
  }
};
</script>
