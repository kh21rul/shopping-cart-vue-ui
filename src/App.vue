<template>
  <div id="app" class="container mt-5">
    <h1>IDShop</h1>
    <p class="animate__animated animate__fadeInRight">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium id
      neque perspiciatis excepturi ut voluptates tenetur, reprehenderit quidem,
      sint tempora officia inventore! Esse qui itaque asperiores iusto odio
      velit nisi.
    </p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price-display :value="4.23"></price-display>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PriceDisplay from "./components/PriceDisplay.vue";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    PriceDisplay,
  },
};
</script>
