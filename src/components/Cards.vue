<template>
  <div>
    <div class="text-center">
      <button type="button" class="btn btn-outline-dark" @click="filterData">
        Big Dogs
      </button>
    </div>

    <div class="container text-center">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4 img"
          v-for="pet in getPets"
          :key="pet.name"
        >
          <img :src="pet.img" />
          <div class="overlay">
            <div class="text">
              <p>{{ pet.breed }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  computed: {
    getPets() {
      return this.$store.state.pets;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    filterData() {
      this.$store.dispatch("getLargeDogs");
    },
  },
};
</script>