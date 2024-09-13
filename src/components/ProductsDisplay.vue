<template>
  <div>
    <h1>IDShop</h1>
    <navbar-display
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="delItem"
    ></navbar-display>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <list-product
      :products="products"
      :maximum="maximum"
      @add-item="addItem"
    ></list-product>
  </div>
</template>

<script>
import NavbarDisplay from "./NavbarDisplay.vue";
import ListProduct from "./ListProduct.vue";
import PriceSlider from "./PriceSlider.vue";

export default {
  name: "ProductsDisplay",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  components: {
    ListProduct,
    PriceSlider,
    NavbarDisplay,
  },
  methods: {
    toggleSlider: function () {
      this.$emit("toggle");
    },
    addItem: function (item) {
      this.$emit("add", item);
    },
    delItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>
