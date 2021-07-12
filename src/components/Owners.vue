<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4 img"
          v-for="owner in getOwners"
          :key="owner.first_name"
        >
          <img :src="owner.img" />
          <div class="overlay">
            <div class="text">
              <p>{{ owner.first_name }} {{ owner.last_name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Owners",

  computed: {
    getOwners() {
      return this.$store.state.owners;
    },
  },
  mounted() {
    this.$store.dispatch("getOwners");
  },
};
</script>
