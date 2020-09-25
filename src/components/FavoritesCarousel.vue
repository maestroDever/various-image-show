<template>
  <section class="favorites">
    <figure class="favorite-image" v-for="image in favorites" :key="image.id">
      <Card :image="image" :show-star="false" />
    </figure>
  </section>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "FavoritesGallery",
  props: {
    favorites: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.favorites {
  padding: 0.5vw;
  font-size: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: row wrap;

  .favorite-image {
    -webkit-box-flex: auto;
    -ms-flex: auto;
    flex: auto;
    width: 200px;
    margin: 0.5vw;

    img {
      width: 100%;
      height: auto;
    }
  }
}
@media screen and (max-width: 400px) {
  .favorite-image {
    margin: 0;
  }
  .favorites {
    padding: 0;
  }
}
</style>
