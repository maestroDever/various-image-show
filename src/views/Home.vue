<template>
  <section class="images-wrapper">
    <div v-if="loading">Loading...</div>
    <div class="image" v-for="image in images" :key="image.id">
      <ImageCard :image="image" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import ImageCard from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    ImageCard
  },
  computed: {
    ...mapState(["images", "loading"])
  }
};
</script>

<style lang="scss" scoped>
.images-wrapper {
  line-height: 0;
  column-count: 4;
  column-gap: 0px;

  .image {
    width: 100% !important;
    height: auto !important;
  }
}
</style>
