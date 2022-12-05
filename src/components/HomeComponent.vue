<template>
  <CarouselComponent />
  <MainText />
</template>

<script>
import CarouselComponent from "@/components/Carousel.vue";
import MainText from "@/components/MainTextComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    CarouselComponent,
    MainText,
  },
};
</script>
