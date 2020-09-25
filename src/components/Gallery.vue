<template>
  <div id="gallery" class="container-fluid">
    <img
      v-for="image in images"
      :key="image.id"
      :src="`https://portal-tb.lynxx.co/api-test/image/${image.id}`"
      class="card"
    />
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  column-count: 4;
  column-gap: 20px;

  @media (max-width: 1200px) {
    column-count: 3;
    column-gap: 20px;
  }
  @media (max-width: 800px) {
    column-count: 2;
    column-gap: 20px;
  }
  @media (max-width: 600px) {
    column-count: 1;
  }
}
.card {
  width: 100%;
  height: auto;
  margin: 4% auto;
  box-shadow: -3px 5px 15px #000;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
