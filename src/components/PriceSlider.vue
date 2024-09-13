<template>
  <transition
    name="custom"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div v-if="sliderStatus">
      <div class="align-item-center" :class="sliderState">
        <label for="" class="font-weight-bold mr-2">Max</label>
        <input
          type="number"
          class="form-control mx-2"
          style="width: 60px; text-align: center"
          v-model="maxAmount"
        />
        <input
          type="range"
          class="custom-range"
          min="0"
          max="200"
          v-model="maxAmount"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PriceSlider",
  props: ["sliderStatus", "maximum"],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
    maxAmount: {
      get() {
        return this.maximum;
      },
      set(value) {
        this.$emit("update:maximum", Number(value));
      },
    },
  },
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
