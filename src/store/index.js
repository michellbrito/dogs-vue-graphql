import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import axios from "axios";

export const store = new Vuex.Store({
  state: {
    pets: [],
    owners: []
  },
  mutations: {
    SET_PETS(state, pets) {
      state.pets = pets;
    },
    SET_OWNERS(state, owners) {
      state.owners = owners;
    },
  },
  actions: {
    getPosts({ commit }) {
        const fullUrl = `${window.location.href}graphql?query={pets{name,breed,img}}`;
        // const fullUrl = `http://localhost:3000/graphql?query={pets{name,breed,img}}`
      axios
        .get(fullUrl)
        .then((response) => {
          commit("SET_PETS", response.data.data.pets);
        });
    },
    getLargeDogs({ commit }) {
        const fullUrl = `${window.location.href}graphql?query={pets{name,breed,img,size}}`;
        // const fullUrl = `http://localhost:3000/graphql?query={pets{name,breed,img,size}}`
        axios
          .get(fullUrl)
          .then((response) => {
              const data = response.data.data.pets.filter(dog => dog.size === "Large");
              console.log(data)
            commit("SET_PETS", data);
          });
      },
      getOwners({ commit }) {
        const fullUrl = `${window.location.href}graphql?query={owners{first_name,last_name,img}}`;
        // const fullUrl = `http://localhost:3000/graphql?query={owners{first_name,last_name,img}}`
        axios
          .get(fullUrl)
          .then((response) => {
              const data = response.data.data.owners;
              console.log(data)
            commit("SET_OWNERS", data);
          });
      },
  },
  getters: {},
});
