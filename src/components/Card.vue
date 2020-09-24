<template>
  <article class="card" :class="{ favorite: image.favourite }">
    <h1 class="card--title">{{ image.name }}</h1>
    <figure class="card--image">
      <img
        :src="`https://portal-tb.lynxx.co/api-test/image/${image.id}`"
        :alt="image.name"
      />
    </figure>
  </article>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  &--title {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px 20px;
    background: #40fa40;
    border-radius: 5px;
    margin: 0;
  }

  &--image {
    margin: 0;

    img {
      width: 100%;
    }
  }
}
</style>
