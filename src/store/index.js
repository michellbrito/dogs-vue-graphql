import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";

export const store = new Vuex.Store({
  state: {
    pets: [],
  },
  mutations: {
    SET_PETS(state, pets) {
      state.pets = pets;
    },
  },
  actions: {
    getPosts({ commit }) {
        const fullUrl = `${window.location.href}graphql?query={pets{name,breed,img}}`;
        // `http://localhost:3000/graphql?query={pets{name,breed,img}}`
      axios
        .get(fullUrl)
        .then((response) => {
          commit("SET_PETS", response.data.data.pets);
        });
    },
    getLargeDogs({ commit }) {
        const fullUrl = `${window.location.href}graphql?query={pets{name,breed,img,size}}`;
        // `http://localhost:3000/graphql?query={petß∂ss{name,breed,img}}`
        axios
          .get(fullUrl)
          .then((response) => {
              const data = response.data.data.pets.filter(dog => dog.size === "Large");
              console.log(data)
            commit("SET_PETS", data);
          });
      },
  },
  getters: {},
});
