<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4 img"
          v-for="pet in pets"
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
import axios from 'axios'

export default {
  name: "Cards",
  data: function() {
    return {
      pets: []
    };
  },
  methods: {
    async fetchData(){
    console.log(window.location)
    const fullUrl = `${window.location.href}graphql?query={pets{name,breed,img}}`;
    console.log(fullUrl)
      const response = await axios.get(fullUrl);
      this.pets = response.data.data.pets;
      console.log(response)
    }
  },
  mounted () {
   this.fetchData();
  }
};
</script>
