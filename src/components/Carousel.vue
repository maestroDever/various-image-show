<template>
  <div class="wrapper">
    <div class="container">
      <div class="carousel">
        <div class="carousel-prev" @click="prev">
          &larr;
        </div>
        <div class="carousel-next" @click="next">
          &rarr;
        </div>
        <ul class="carousel-pagination">
          <li
            class="carousel-bullet"
            @click="slideTo(index)"
            v-for="(image, index) in images"
            :key="image.id"
            :class="{ 'active-bullet': index == currentIndex }"
          ></li>
        </ul>
        <ul
          class="carousel-container"
          :style="{ width: `${100 * totalItems}%` }"
        >
          <li
            class="carousel-item"
            v-for="image in images"
            :key="image.id"
            :style="{ width: `${percent}%` }"
          >
            <Card :image="image" />
          </li>
        </ul>
      </div>
    </div>
    <list-view :images="images" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import ListView from "./ListView.vue";

export default {
  name: "Carousel",
  components: {
    Card,
    ListView
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    currentIndex: 0
  }),

  methods: {
    slideTo(index) {
      index =
        index < 0 ? this.totalItems - 1 : index >= this.totalItems ? 0 : index;

      const carousel = document.querySelector(".carousel");
      const container = carousel.querySelector(".carousel-container");

      container.style.WebkitTransform = container.style.transform =
        "translate(-" + index * this.percent + "%, 0)";
      this.currentIndex = index;
    },
    next() {
      this.slideTo(this.currentIndex + 1);
    },
    prev() {
      this.slideTo(this.currentIndex - 1);
    }
  },
  computed: {
    totalItems() {
      return this.images.length;
    },
    percent() {
      return this.totalItems ? 100 / this.totalItems : 0;
    }
  }
};
</script>

<style lang="scss" scoped>
// Page

.container {
  width: 70%;
  margin: 0 auto;
  border: 2px solid #bbb;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

// Carousel
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-container {
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
  transition: transform 0.3s cubic-bezier(0.694, 0.0482, 0.335, 1);
}

.carousel-item {
  position: relative;
  float: left;
}

// Next / Prev Buttons
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  background-color: #222;
  opacity: 0.7;
  border-radius: 50%;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  text-align: center;
  z-index: 10;
  transition: opacity 0.3s ease;

  span {
    display: inline-block;
    border-right: 4px solid white;
    border-bottom: 4px solid white;
    width: 10px;
    height: 10px;
  }
}

.carousel-prev {
  left: 2%;

  span {
    transform: rotate(-225deg);
  }
}

.carousel-next {
  right: 2%;

  span {
    transform: rotate(-45deg);
  }
}

.carousel-prev:hover,
.carousel-next:hover {
  opacity: 1;
}

// Pagination
.carousel-pagination {
  list-style: none;
  position: absolute;
  bottom: 3%;
  left: 0;
  right: 0;
  width: 50%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 10;
}

.carousel-bullet {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #000;
  cursor: pointer;
  margin: 0 7px;
  border-radius: 50%;
  opacity: 0.5;
  transition-property: transform, opacity, background-color;
  transition-duration: 0.3s;
}

.carousel-bullet:hover {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

.carousel-bullet.active-bullet,
.carousel-bullet.active-bullet:hover {
  opacity: 1;
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  background-color: #fff;
  cursor: default;
}
</style>
