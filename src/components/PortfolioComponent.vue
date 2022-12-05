<template>
  <VideoComponent />
  <PortfolioExamples />
</template>

<script>
import VideoComponent from "@/components/VideoComponent.vue";
import PortfolioExamples from "@/components/PortfolioExamples.vue";

export default {
  name: "PortfolioComponent",
  components: {
    VideoComponent,
    PortfolioExamples,
  },
};
</script>
