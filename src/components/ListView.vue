<template>
  <section class="list">
    <h2>Find all images below</h2>
    <div class="list__container">
      <div class="list--item" v-for="image in images" :key="image.id">
        <img
          class="list--item__img"
          :src="`https://portal-tb.lynxx.co/api-test/image/${image.id}`"
          :alt="image.name"
        />

        <div class="list--item__details">
          <p class="list--item__details--title">{{ image.name }}</p>
          <p class="list--item__details--subtitle">
            {{ image.resolution | showResolution }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ListView",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    showResolution(data) {
      return `${data.width}x${data.height}`;
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Poppins", sans-serif;
  color: white;
  background: rgb(244, 67, 54);
  background: linear-gradient(
    83deg,
    rgba(244, 67, 54, 1) 0%,
    rgba(255, 87, 34, 1) 100%
  );
  background-size: 400% 400%;
}

/* List */

.list {
  padding: 30px;
  position: relative;
  overflow-x: hidden;
}

.list__container {
  padding-bottom: 10px;
  width: 100%;
  margin: 70px auto;
  white-space: nowrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 20px;
}

.list--item {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  background-color: lightblue;
  overflow: hidden;
  cursor: pointer;
  transition: 350ms all;
  transform-origin: center center;
}

.list__container:hover .list--item {
  opacity: 0.3;
}

.list__container:hover .list--item:hover {
  transform: scale(1.2, 1.2);
  opacity: 1;
}

.list--item:hover .list--item__details {
  opacity: 1;
}

.list--item__img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.list--item__details {
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 10px;
  background: linear-gradient(
    83deg,
    rgba(244, 67, 54, 0.8) 0%,
    rgba(255, 87, 34, 0.1) 100%
  );
  opacity: 0;
  transition: 350ms opacity;
}
.list--item__details img {
  margin: 0 5px;
  width: 20px;
}
</style>
