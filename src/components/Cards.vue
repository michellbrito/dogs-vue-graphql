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
export default {
  name: "Cards",
  data: function() {
    return {
      pets: [
        {
          id: 1,
          name: "Rocky",
          breed: "Dalmatian",
          color: "White and Black",
          size: "Large",
          img: "https://i.imgur.com/dEMxUqK.jpg",
          owner_id: 1,
        },
        {
          id: 2,
          name: "Skippy",
          breed: "Chinese Shar Pei",
          color: "Cream",
          size: "Medium",
          img: "https://i.imgur.com/ob0qRSz.jpg",
          owner_id: 1,
        },
        {
          id: 3,
          name: "Biscuit",
          breed: "Maltese Shih Tzu",
          color: "White",
          size: "Small",
          img: "https://i.imgur.com/amBCLmT.png",
          owner_id: 2,
        },
        {
          id: 4,
          name: "Zeke",
          breed: "Great Dane",
          color: "Black",
          size: "Large",
          img: "https://i.imgur.com/o2ttnds.jpg",
          owner_id: 3,
        },
        {
          id: 5,
          name: "Booker",
          breed: "Goldendoodle",
          color: "Gold",
          size: "Medium",
          img: "https://i.imgur.com/v3tepaM.jpg",
          owner_id: 4,
        },
        {
          id: 5,
          name: "Max",
          breed: "West Highland White Terrier",
          color: "White",
          size: "Small",
          img: "https://i.imgur.com/VaGS1A0.jpg",
          owner_id: 4,
        },
      ],
    };
  },
};
</script>
