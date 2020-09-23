import Vue from "vue";
import Vuex from "vuex";

import { getAllImages } from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: () => [],
    loading: false
  },
  mutations: {
    SETLOADING: (state, value) => (state.loading = value),
    UPDATE_IMAGES: (state, data) => {
      state.images = data;
    }
  },
  actions: {
    getAllImages: async ({ commit }) => {
      commit("SETLOADING", true);
      const images = await getAllImages();
      commit("SETLOADING", false);

      commit("UPDATE_IMAGES", images);
    }
  },
  getters: {
    favoriteImages: state => state.images.filter(el => el.favourite)
  }
});
