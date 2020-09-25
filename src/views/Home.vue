<template>
  <section class="images-wrapper">
    <h1 class="title">Home</h1>
    <hr />
    <div v-if="loading">Loading...</div>
    <gallery :images="images" @click="showImage($event)" />
    <modal
      v-if="showModal"
      @close="showModal = false"
      :image="images[selectedIndex]"
    />
  </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import Gallery from "@/components/Gallery.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Gallery,
    Modal
  },
  data: () => ({
    showModal: false,
    selectedIndex: 0
  }),
  computed: {
    ...mapState(["images", "loading"])
  },
  methods: {
    showImage(index) {
      this.selectedIndex = index;
      setTimeout(() => (this.showModal = true), 100);
    }
  }
};
</script>
